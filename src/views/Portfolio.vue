<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    title: '项目一',
    description: '这是一个使用Vue3和TypeScript开发的现代化Web应用',
    imageUrl: 'https://via.placeholder.com/300x200',
    tags: ['Vue3', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: '项目二',
    description: '基于Node.js的后端API服务，提供高性能的数据处理能力',
    imageUrl: 'https://via.placeholder.com/300x200',
    tags: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: '项目三',
    description: '响应式设计的企业官网，完美适配各种设备屏幕',
    imageUrl: 'https://via.placeholder.com/300x200',
    tags: ['React', 'Responsive Design', 'SCSS']
  }
])
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">作品集</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          这里展示了我的一些代表性项目作品
        </p>
      </div>

      <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projects" :key="project.title" class="bg-white overflow-hidden shadow-lg rounded-lg">
          <div class="relative">
            <img :src="project.imageUrl" :alt="project.title" class="w-full h-48 object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-lg font-medium text-gray-900">{{ project.title }}</h3>
            <p class="mt-2 text-base text-gray-500">{{ project.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag"
                class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>