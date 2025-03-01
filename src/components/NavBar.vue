<template>
    <header class="z-50 py-6 border-b-2">
        <nav class="flex items-center justify-between">
            <ul class="flex gap-4 sm:gap-8">
                <li v-for="(page, index) in Pages.data" 
                :key="page.name" 
                :class="['font-supreme font-normal', 
                index === activeIndex ? 'text-foreground cursor-pointer' : 'text-muted-foreground hover:opacity-50']">
                    <RouterLink v-if="index !== activeIndex" :to="page.href">{{ page.name }}</RouterLink>
                    <span v-else>{{ page.name }}</span>
                </li>
            </ul>
            <div>
                <ModeToggle/>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ModeToggle from './ModeToggle.vue';
import Pages from '@/data/Pages.json'

defineProps<{
    activeIndex?: number; // Optional prop (defaults to -1)
}>();
</script>