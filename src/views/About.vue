<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  { name: '前端开发', items: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { name: '后端开发', items: ['Node.js', 'Express', 'Python', 'RESTful API'] },
  { name: '开发工具', items: ['Git', 'VS Code', 'Trae', 'Cursor'] },
])

const experiences = ref([
  {
    title: '高级前端开发工程师',
    company: 'ABC科技有限公司',
    period: '2022 - 至今',
    description: '负责公司核心产品的前端架构设计和开发，推动前端工程化建设'
  },
  {
    title: '全栈开发工程师',
    company: 'XYZ创新科技',
    period: '2020 - 2022',
    description: '参与多个全栈项目的开发，负责前后端功能实现和性能优化'
  }
])
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">关于我</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          热爱技术，追求创新，致力于打造优秀的用户体验
        </p>
      </div>

      <!-- 个人简介 -->
      <div class="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4">个人简介</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            作为一名拥有8年开发经验的全栈工程师，我专注于打造现代化Web应用生态。在前端领域深耕Vue.js、React等主流框架，
            同时精通Node.js后端开发。凭借扎实的Python技术功底，目前正深入研究PyTorch框架和大语言模型，致力于将前沿AI技术融入实际应用。我始终保持对新技术的热情，并乐于在技术社区分享实践经验。
          </p>
          <p class="text-gray-600 leading-relaxed mb-4">
            擅长使用 Trae 和 Cursor 等AI编程助手进行开发，在实际项目中积累了丰富的AI辅助编程经验。我的作品集大多都是借助AI工具高效完成的，这些作品不仅展示了我的技术能力，更体现了我在AI工具应用方面的专业水平。通过合理运用AI，我能够显著提升开发效率，同时保证代码质量和项目交付速度。
          </p>
        </div>
      </div>

      <!-- 技能特长 -->
      <div class="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
        <div v-for="category in skills" :key="category.name" class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ category.name }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in category.items" :key="item"
                class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 工作经历 -->
      <!-- <div class="mt-12">
        <h3 class="text-xl font-bold text-gray-900 mb-6">工作经历</h3>
        <div class="space-y-6">
          <div v-for="exp in experiences" :key="exp.title" class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-6">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="text-lg font-semibold text-gray-900">{{ exp.title }}</h4>
                  <p class="text-gray-600">{{ exp.company }}</p>
                </div>
                <span class="text-sm text-gray-500">{{ exp.period }}</span>
              </div>
              <p class="mt-4 text-gray-600">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>