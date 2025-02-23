<template>
    <div class="mx-auto flex max-w-3xl mb-10">
        <section class="mt-8 flex flex-col">
            <div class="mb-4 flex items-center justify-between">
                <h2 class="text-3xl font-medium">Featured Projects</h2>
                <a href="#" class="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <p class="font-light text-md">View More</p>
                    <Icon icon="lucide:arrow-right" class="text-lg"/>
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ProjectCard v-for="project in projects" :key="project.name" :project="project"/>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { Icon } from '@iconify/vue';
import { getFeaturedProjects } from '@/composables/useProjects';

const projects = getFeaturedProjects();
</script>
