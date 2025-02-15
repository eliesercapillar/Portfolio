<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent(() => import(`./components/NavBar.vue`))
const HeroSection = defineAsyncComponent(() => import(`./components/Hero/HeroSection.vue`))
const HeroEduardo = defineAsyncComponent(() => import(`./components/Hero/HeroEduardo.vue`))
const HeroTed = defineAsyncComponent(() => import(`./components/Hero/HeroTed.vue`))

const Links = defineAsyncComponent(() => import(`./components/Links.vue`))
</script>

<template>
  <div class="bg-[#777]">
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased">
      <NavBar/>
      <!-- <HeroSection/> -->
      <!-- <HeroEduardo/> -->
      <HeroTed/>
      <Links/>
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
