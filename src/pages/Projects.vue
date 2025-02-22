<template>
    <div class="min-h-screen relative">
      <RippleCircleBG/>
      <div class="mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased">
        <NavBarDefault/>
        <AllProjects/>
        <Footer/>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import RippleCircleBG   from '@/components/RippleCircleBG.vue'
import NavBarDefault    from '@/components/NavBarDefault.vue';
import AllProjects      from '@/components/AllProjects.vue';
import HeroSection      from '@/components/HeroSection.vue';
import Technologies     from '@/components/Technologies.vue';
import Experience       from '@/components/Experience.vue';
import FeaturedProjects from '@/components/FeaturedProjects.vue';
import Footer           from '@/components/Footer.vue';
</script>
  