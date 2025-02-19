<template>
    <header class="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
        <nav class="flex items-center justify-between">
            <ul class="flex gap-4 sm:gap-8">
                <li v-for="page in Pages.data" :key="page.name" class="text-muted-foreground hover:text-foreground">
                    <a :href="page.href">{{ page.name }}</a>
                <Link href={nav.href}>{nav.name}</Link>
                </li>
            </ul>
            <div>
                <ModeToggle/>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import ModeToggle from './ModeToggle.vue';
import Pages from '@/data/Pages.json'
</script>