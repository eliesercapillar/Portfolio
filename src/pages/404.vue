<template>
    <div class="min-h-screen relative">
      <RippleCircleBG/>
      <div class="mx-auto flex min-h-screen max-w-3xl flex-col px-8">
        <NavBar :activeIndex="-1"/>
      </div>
      <Footer/>
    </div>

    <!-- <div class="flex h-screen flex-col items-center justify-center text-center">
      <h1 class="text-4xl font-bold">404 - Page Not Found</h1>
      <p class="mt-4 text-lg">The page you're looking for doesn't exist.</p>
      <router-link to="/" class="mt-6 text-blue-500 hover:underline">Go Home</router-link>
    </div> -->
</template>

<script setup lang="ts">
import RippleCircleBG from '@/components/RippleCircleBG.vue'
import NavBar         from '@/components/NavBar.vue';
import Footer         from '@/components/Footer.vue';
</script>
  