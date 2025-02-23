<template>
    <div class="min-h-screen">
      <RippleCircleBG/>
      <div class="mx-auto min-h-screen max-w-3xl px-8 grid grid-rows-[auto_1fr_auto]">
        <NavBar :activeIndex="-1"/>
        <div class="p-16 flex flex-col justify-center gap-10">
          <div class="flex items-center justify-center gap-4">
            <p class="text-3xl md:text-7xl opacity-60">404</p>
            <span class="text-3xl md:text-7xl opacity-60"> | </span>
            <p class="text-3xl md:text-7xl opacity-60">¯\_(ツ)_/¯</p>
          </div>
          <div class="flex items-center justify-center">
            <a href="#" class="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Icon icon="lucide:arrow-left" class="size-7"/>
                <p class="font-light text-lg md:text-3xl">Back to Home</p>
            </a>
          </div>
        </div>
        <Footer/>
      </div>
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
import { Icon } from '@iconify/vue';
</script>
  