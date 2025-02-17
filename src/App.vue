<script setup lang="ts">
import NavBarDefault from '@/components/NavBarDefault.vue';
import NavBarAlt from '@/components/NavBarAlt.vue';
import HeroSection from '@/components/Hero/HeroSection.vue';
import HeroEduardo from '@/components/Hero/HeroEduardo.vue';
import HeroTed from '@/components/Hero/HeroTed.vue';

import Technologies from './components/Technologies.vue';
</script>

<template>
  <div class="min-h-screen bg-background relative">
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased">
      <NavBarDefault/>
      <!-- <NavBarAlt/> -->
      <!-- <HeroSection/> -->
      <!-- <HeroEduardo/> -->
      <HeroTed/>
      <Technologies/>
    </div>
  </div>
</template>
