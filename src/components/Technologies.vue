<template>
    <div class="bg-background mx-auto flex max-w-3xl flex-col px-8 font-sans antialiased">
        <section>
            <h2 class="text-3xl mb-4 text-foreground">Technologies</h2>
            <div class="grid grid-cols-4 gap-1 sm:grid-cols-6 md:grid-cols-7">
                <Card v-for="t in Tech.data" :key="t.name" 
                    class="border text-card-foreground shadow overflow-hidden rounded-md">
                    <CardContent class="flex aspect-square select-none flex-col items-center justify-center p-2 gap-2">
                        <Icon :icon="t.icon" class="size-12 max-w-full max-h-full"></Icon>
                        <CardTitle class="text-sm text-center ">{{ t.name }}</CardTitle>
                    </CardContent>
                </Card>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Tech from "@/data/Technologies.json"
import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card'
import { Icon } from '@iconify/vue';
</script>
