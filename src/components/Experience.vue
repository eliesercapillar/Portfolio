<template>
    <div class="mx-auto max-w-3xl w-full">
        <section class="mt-8 flex flex-col w-full">
            <h2 class="text-3xl mb-4 text-foreground font-medium">Experience</h2>
            <Tabs default-value="work">
                <TabsList class="w-full shadow-md">
                    <TabsTrigger value="work" class="flex-1 font-normal" >Professional</TabsTrigger>
                    <TabsTrigger value="school" class="flex-1 font-normal">Education</TabsTrigger>
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
