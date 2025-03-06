<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow pt-16 pb-24">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
