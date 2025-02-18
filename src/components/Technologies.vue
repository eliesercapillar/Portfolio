<template>
    <div class="bg-background mx-auto flex max-w-3xl px-8 font-sans antialiased w-full">
        <section class="mt-8 flex flex-col w-full">
            <h2 class="text-3xl mb-4 text-foreground">Technologies</h2>
            <div class="grid grid-cols-4 gap-1 md:grid-cols-5">
                <Card v-for="t in Tech.data" :key="t.name" 
                    class="border text-card-foreground overflow-hidden rounded-md">
                    <CardContent class="flex flex-col aspect-square select-none items-center justify-center p-2 gap-2">
                        <Icon :icon="getIcon(t).value" class="size-12"></Icon>
                        <CardTitle class="text-xs md:text-sm text-center">{{ t.name }}</CardTitle>
                    </CardContent>
                </Card>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Tech from "@/data/Technologies.json"
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Icon } from '@iconify/vue';
import { loadIcon, loadIcons } from '@iconify/vue';
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue';
import { onMounted } from "vue";

const mode = useColorMode()

const getIcon = (t: any) => computed(() => {
    if (!t.hasMultipleIcons) return t.icon;
    return mode.value === 'light' ? t.icon_light : t.icon_dark;
});

// Preload Images
onMounted(() => {
    Tech.data.forEach((t: any) => {
        if (t.hasMultipleIcons) loadIcons([t.icon_light, t.icon_dark])
        else loadIcon(t.icon)
    })
})

</script>
