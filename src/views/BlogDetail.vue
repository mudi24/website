<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '../content/blogData'
// @ts-ignore
import MarkdownIt from 'markdown-it'

const route = useRoute()
const title = route.params.title as string

// 添加日期格式化函数
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

interface Post {
  title: string
  content: string
  date: string
  readTime: string
  category: string
}

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

const post = ref<Post>({
  title: '文章未找到',
  content: '抱歉，您请求的文章不存在。',
  date: '',
  readTime: '',
  category: ''
})

onMounted(async () => {
  try {
    // 从blogData中获取文章元数据
    const postMeta = posts.find(p => p.title === title)
    if (!postMeta) {
      console.error('Blog post not found:', title)
      return
    }

    // 加载markdown文件内容
    const response = await fetch(`/blogs/${encodeURIComponent(title)}.md`)
    if (response.ok) {
      const text = await response.text()
      const [_, ...contentParts] = text.split('---\n').filter(Boolean)

      const rawContent = contentParts.join('---\n')
      post.value = {
        ...postMeta,
        content: md.render(rawContent)
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
              <span>{{ formatDate(post.date) }}</span>
              <span>{{ post.readTime }}</span>
            </div>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 mb-6">{{ post.title }}</h1>
          <div class="prose prose-sm prose-blue max-w-none" v-html="post.content">
          </div>
        </div>
      </article>
    </div>
  </div>
</template>