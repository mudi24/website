<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = route.params.title as string

interface Post {
  title: string
  content: string
  date: string
  readTime: string
  category: string
}

const post = ref<Post>({
  title: '文章未找到',
  content: '抱歉，您请求的文章不存在。',
  date: '',
  readTime: '',
  category: ''
})

onMounted(async () => {
  try {
    const response = await fetch(`/src/content/blogs/${encodeURIComponent(title)}.md`)
    if (response.ok) {
      const text = await response.text()
      const [frontMatter, ...contentParts] = text.split('---\n').filter(Boolean)
      const metadata = frontMatter.split('\n').reduce((acc, line) => {
        const [key, value] = line.split(': ').map(s => s.trim())
        if (key && value) acc[key] = value
        return acc
      }, {} as Record<string, string>)

      post.value = {
        title: metadata.title || title,
        content: contentParts.join('---\n'),
        date: metadata.date || '',
        readTime: metadata.readTime || '',
        category: metadata.category || ''
      }
    }
  } catch (error) {
    console.error('Failed to load blog post:', error)
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <article class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-8">
          <div class="flex items-center justify-between mb-6">
            <span class="text-sm font-medium text-blue-600">{{ post.category }}</span>
            <div class="flex space-x-4 text-sm text-gray-500">
              <span>{{ post.date }}</span>
              <span>{{ post.readTime }}</span>
            </div>
          </div>
          <h1 class="text-3xl font-bold text-gray-900 mb-6">{{ post.title }}</h1>
          <div class="prose prose-lg max-w-none" v-html="post.content.replace(/\n\n/g, '<br><br>').replace(/\`\`\`([\s\S]*?)\`\`\`/g, (match, code) => '<pre class=\'bg-gray-100 p-4 rounded-lg overflow-x-auto\'><code>' + code + '</code></pre>')">
          </div>
        </div>
      </article>
    </div>
  </div>
</template>