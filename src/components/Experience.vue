<template>
    <div class="mx-auto flex max-w-3xl antialiased w-full">
        <section class="mt-8 flex flex-col w-full">
            <h2 class="text-3xl mb-4 text-foreground font-supreme font-medium">Experience</h2>
            <Tabs default-value="work" class="w-full rounded-md">
                <TabsList class="w-full flex shadow-md">
                    <TabsTrigger value="work" class="flex-1 font-supreme font-normal" >Professional</TabsTrigger>
                    <TabsTrigger value="school" class="flex-1 font-supreme font-normal">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                    <Timeline :entries="Career.data" key="career"/>
                </TabsContent>
                <TabsContent value="school">
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
