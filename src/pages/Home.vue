<template>
  <Analytics />
  <div class="min-h-screen">
    <RippleCircleBG/>
    <div class="mx-auto max-w-3xl px-8 flex flex-col">
      <NavBar :activeIndex="0"/>
      <HeroSection/>
      <Technologies/>
      <Experience/>
      <FeaturedProjects/>
      <Footer/>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import RippleCircleBG   from '@/components/RippleCircleBG.vue'
import NavBar           from '@/components/NavBar.vue';
import HeroSection      from '@/components/HeroSection.vue';
import Technologies     from '@/components/Technologies.vue';
import Experience       from '@/components/Experience.vue';
import FeaturedProjects from '@/components/FeaturedProjects.vue';
import Footer           from '@/components/Footer.vue';
import { Analytics }    from '@vercel/analytics/vue';
</script>
  