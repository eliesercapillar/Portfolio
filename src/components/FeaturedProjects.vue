<template>
    <div class="mx-auto flex max-w-3xl font-sans antialiased w-full mb-10">
        <section class="mt-8 flex flex-col w-full">
            <div class="mb-4 flex items-center justify-between">
                <h2 class="text-3xl text-foreground inline">Featured Projects</h2>
                <a href="#" class="text-muted-foreground hover:text-foreground">View More</a>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <ProjectCard v-for="proj in featured" :key="proj.name" :project="proj"/>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Projects from '@/data/Projects.json'
import ProjectCard from '@/components/ProjectCard.vue';
import { computed } from 'vue'

const featured = computed(() => Projects.data.filter(project => project.featured));
</script>