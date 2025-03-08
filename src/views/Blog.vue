<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { posts } from '../content/blogData'

const router = useRouter()
const blogPosts = ref(posts)
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">技术博客</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          分享我的技术见解和学习心得
        </p>
      </div>

      <div class="mt-12 space-y-6">
        <article v-for="post in blogPosts" :key="post.title" class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="p-6">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-blue-600">{{ post.category }}</span>
              <div class="flex space-x-4 text-sm text-gray-500">
                <span>{{ post.date }}</span>
                <span>{{ post.readTime }}</span>
              </div>
            </div>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">
              {{ post.title }}
            </h3>
            <p class="mt-3 text-base text-gray-500">
              {{ post.description }}
            </p>
            <div class="mt-4">
              <button @click="router.push(`/blog/${encodeURIComponent(post.title)}`)"
              class="text-blue-600 hover:text-blue-700 font-medium">
                阅读更多 →
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>