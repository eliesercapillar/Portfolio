<template>
    <div class="mx-auto flex max-w-3xl px-8 font-sans antialiased w-full">
        <section class="mt-8 flex flex-col w-full">
            <h2 class="text-3xl mb-4 text-foreground">Experience</h2>
            <Tabs default-value="experience" class="w-full rounded-md">
                <TabsList class="w-full">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="experience">
                    <Timeline :entries="Career.data" />
                </TabsContent>
                <TabsContent value="education">
                    <Timeline :entries="Education.data" />
                </TabsContent>
            </Tabs>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Timeline from '@/components/Timeline.vue';
import Career from '@/data/Career.json';
import Education from '@/data/Education.json';
</script>
