<template>
    <div class="min-h-screen relative grid grid-rows-[auto_1fr_auto]">
      <RippleCircleBG/>
      <div class="mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased">
        <NavBarDefault/>
        <AllProjects/>
      </div>
      <Footer/>
    </div>
</template>
  
<script setup lang="ts">
import RippleCircleBG   from '@/components/RippleCircleBG.vue'
import NavBarDefault    from '@/components/NavBarDefault.vue';
import AllProjects      from '@/components/AllProjects.vue';
import Footer           from '@/components/Footer.vue';
</script>
  