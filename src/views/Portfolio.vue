<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    title: '营销海报以及标语',
    description: '基于 Coze 构建的营销文案助手，能够根据产品特点和目标受众自动生成吸引力标语和海报文案。支持多种营销场景如节日促销、新品发布、品牌宣传等，并能根据不同平台（如微信、小红书、抖音）调整文案风格。集成了 A/B 测试功能，帮助优化文案效果。',
    imageUrl: '/portfolio/marketing.png',
    tags: ['Coze', '营销文案', '工作流'],
    link: 'https://www.coze.cn/store/project/7475688407848058917?bid=6fjo6n8389g0c&entity_id=1'
  },
  {
    title: 'Prompt实验室',
    description: '这是一个基于React和Tailwind CSS开发的Prompt实验室项目，主要功能包括Prompt库浏览、实时测试和调试Prompt效果，支持多种AI模型接入。',
    imageUrl: '/portfolio/prompt.png',
    tags: ['React', 'Express', 'DeepSeek'],
    link: 'http://14.103.241.150:8081/'
  },
  {
    title: 'PyTorch 学习可视化',
    description: '这是一个基于Vue 3和Element Plus的PyTorch学习平台，集成了ECharts图表库实现数据可视化。主要功能包括张量操作演示、自动微分可视化、神经网络结构展示、模型训练过程监控和迁移学习效果对比等。',
    imageUrl: '/portfolio/pytorch.png',
    tags: ['Vue', 'Pytorch', 'python'],
    link: 'http://14.103.241.150:8082/'
  }
])

const openProject = (link: string) => {
  window.open(link, '_blank')
}
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
        <div v-for="project in projects" :key="project.title" 
          @click="openProject(project.link)"
          class="bg-white overflow-hidden shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl cursor-pointer transform hover:-translate-y-1">
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