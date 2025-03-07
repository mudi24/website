<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">

    <!-- 主要内容 -->
    <div class="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase animate-fade-in">欢迎来到我的个人网站</h2>
          <p class="mt-2 text-4xl sm:text-5xl leading-tight font-extrabold text-gray-900 animate-fade-in-up">
            探索我的数字世界
          </p>
          <p class="mt-6 max-w-2xl text-xl text-gray-600 mx-auto animate-fade-in-up delay-200">
            很高兴与你相遇在这里，让我们一起探索技术的奥秘，分享创新的思考。
          </p>
        </div>

        <div class="mt-16">
          <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div class="card group hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div class="p-8">
                <div class="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">作品集</h3>
                <p class="mt-4 text-base text-gray-500 leading-relaxed">
                  展示我的项目作品和技术实践。每个项目都凝聚着创意和专业的解决方案。
                </p>
                <button @click="navigateTo('/portfolio')" class="mt-6 btn btn-primary inline-flex items-center">
                  查看作品
                  <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="card group hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div class="p-8">
                <div class="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">技术博客</h3>
                <p class="mt-4 text-base text-gray-500 leading-relaxed">
                  分享我的技术见解、学习心得和行业观点。通过文字传递知识，共同探讨技术的发展与创新。
                </p>
                <button @click="navigateTo('/blog')" class="mt-6 btn btn-primary inline-flex items-center">
                  阅读博客
                  <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="card group hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div class="p-8">
                <div class="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">关于我</h3>
                <p class="mt-4 text-base text-gray-500 leading-relaxed">
                  了解我的专业背景、技能特长和个人经历。我热衷于技术创新，致力于创造优秀的用户体验。
                </p>
                <button @click="navigateTo('/about')" class="mt-6 btn btn-primary inline-flex items-center">
                  了解更多
                  <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>