<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HeroSection from './components/Hero/HeroSection.vue';
import HeroEduardo from './components/Hero/HeroEduardo.vue';
import HeroTed from './components/Hero/HeroTed.vue';

import Technologies from './components/Technologies.vue';
</script>

<template>
  <div class="min-h-screen bg-[#777] relative">
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased">
      <NavBar/>
      <!-- <HeroSection/> -->
      <!-- <HeroEduardo/> -->
      <HeroTed/>
      <Technologies/>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
