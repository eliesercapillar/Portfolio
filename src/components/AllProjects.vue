<template>
    <div class="mx-auto flex max-w-3xl font-sans antialiased w-full">
        <section class="mt-8 flex flex-col w-full">
            <h2 class="font-supreme font-medium text-foreground text-3xl mb-4" >My Work</h2>
            <Tabs default-value="work" class="w-full rounded-md">
                <TabsList class="w-full flex shadow-md">
                    <TabsTrigger value="work" class="flex-1 font-supreme font-normal" >Professional</TabsTrigger>
                    <TabsTrigger value="personal" class="flex-1 font-supreme font-normal">Personal</TabsTrigger>
                    <TabsTrigger value="school" class="flex-1 font-supreme font-normal">School</TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                </TabsContent>
                <TabsContent value="personal">
                </TabsContent>
                <TabsContent value="school">
                </TabsContent>
            </Tabs>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>