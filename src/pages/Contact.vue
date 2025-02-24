<template>
    <div class="min-h-screen">
      <RippleCircleBG/>
      <div class="mx-auto min-h-screen max-w-3xl px-8 grid grid-rows-[auto_1fr_auto]">
        <NavBar :activeIndex="2"/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import RippleCircleBG   from '@/components/RippleCircleBG.vue'
import NavBar           from '@/components/NavBar.vue';
import ContactForm      from '@/components/ContactForm.vue';
import Footer           from '@/components/Footer.vue';
</script>
  