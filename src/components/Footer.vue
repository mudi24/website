<script setup lang="ts">
</script>

<template>
  <footer class="bg-white shadow-inner py-4 md:py-6 fixed bottom-0 left-0 right-0">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
        <div class="flex items-center space-x-4">
          <a href="https://github.com/mudi24" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
            <svg class="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            <span class="ml-2 text-sm md:text-base">GitHub</span>
          </a>

          <span class="text-gray-500 hidden md:inline">|</span>
          <a href="mailto:yaokai729@outlook.com" class="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
            <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="ml-2 text-sm md:text-base">联系我：yaokai729@outlook.com</span>
          </a>
        </div>

        <div class="flex items-center space-x-4">
          <span class="text-gray-500 hidden md:inline">|</span>
          <div class="relative group">
            <button class="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
              <svg class="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.667 11.511c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zm6.666 0c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zm-8.999-7.5h12.332A2.333 2.333 0 0121 6.344v11.312A2.333 2.333 0 0118.666 20H6.334A2.333 2.333 0 014 17.656V6.344A2.333 2.333 0 016.334 4zm.666 2v12h11V6h-11z" />
              </svg>
              <span class="ml-2 text-sm md:text-base">微信：MeowKaiAI</span>
            </button>
            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-48 md:w-full md:max-w-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
              <img src="../assets/images/wechat-qr.png" alt="微信二维码" class="w-full h-auto rounded-lg shadow-lg mx-auto">
              <div class="text-center text-xs md:text-sm text-gray-500 mt-2">扫码添加微信</div>
              <div class="text-center text-xs text-gray-400 mt-1">添加时请注明来源</div>
            </div>
          </div>
          <span class="text-gray-500 hidden md:inline">|</span>
          <span class="text-gray-600 text-sm md:text-base">网页内容主要由 AI 创作</span>
        </div>
      </div>
    </div>
  </footer>
</template>