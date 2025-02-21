<template>
    <div class="mx-auto flex max-w-3xl antialiased w-full">
        <section class="mt-8 flex flex-col w-full">
            <h2 class="text-3xl mb-4 text-foreground font-supreme font-medium">Experience</h2>
            <Tabs default-value="experience" class="w-full rounded-md">
                <TabsList class="w-full flex shadow-md">
                    <TabsTrigger value="experience" class="flex-1 font-supreme font-normal" >Experience</TabsTrigger>
                    <TabsTrigger value="education" class="flex-1 font-supreme font-normal">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="experience">
                    <Timeline :entries="Career.data" key="career"/>
                </TabsContent>
                <TabsContent value="education">
                    <Timeline :entries="Education.data" key="education"/>
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
