<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigateTo = (path: string) => {
  router.push(path)
}

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full z-50 top-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-2xl font-bold text-blue-600">喵凯AI</span>
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <button @click="navigateTo('/')" :class="['nav-link border-b-2', isActive('/') ? 'border-blue-500 text-blue-600' : 'border-transparent hover:border-blue-500']">首页</button>
            <button @click="navigateTo('/portfolio')" :class="['nav-link border-b-2', isActive('/portfolio') ? 'border-blue-500 text-blue-600' : 'border-transparent hover:border-blue-500']">作品集</button>
            <button @click="navigateTo('/blog')" :class="['nav-link border-b-2', isActive('/blog') ? 'border-blue-500 text-blue-600' : 'border-transparent hover:border-blue-500']">博客</button>
            <button @click="navigateTo('/about')" :class="['nav-link border-b-2', isActive('/about') ? 'border-blue-500 text-blue-600' : 'border-transparent hover:border-blue-500']">关于我</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>