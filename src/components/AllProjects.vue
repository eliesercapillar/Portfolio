<template>
    <div class="mx-auto flex max-w-3xl font-sans antialiased w-full mb-10">
        <section class="mt-8 flex flex-col w-full">
            <h2 class="font-supreme font-medium text-3xl mb-4 text-foreground">My Work</h2>
            <Tabs default-value="work" class="w-full rounded-md">
                <TabsList class="w-full flex shadow-md">
                    <TabsTrigger value="work" class="flex-1 font-supreme font-normal" >Professional</TabsTrigger>
                    <TabsTrigger value="personal" class="flex-1 font-supreme font-normal">Personal</TabsTrigger>
                    <TabsTrigger value="school" class="flex-1 font-supreme font-normal">School</TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                    <div v-for="(projects, org) in groupedWorkProjects" :key="org" class="mt-2">
                        <h3 class="text-xl font-supreme font-medium text-foreground mb-2">{{ org }}</h3>
                        <div class="grid grid-cols-2 gap-3">
                            <ProjectCard v-for="project in projects" :key="project.name" :project="project"/>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="personal">
                    <h3 class="text-xl font-supreme font-semibold text-foreground my-4"></h3>
                    <div class="grid grid-cols-2 gap-3">
                        <ProjectCard v-for="project in personalProjects" :key="project.name" :project="project"/>
                    </div>
                </TabsContent>
                <TabsContent value="school">
                    <div v-for="(projects, org) in groupedSchoolProjects" :key="org" class="mt-2">
                        <h3 class="text-xl font-supreme font-semibold text-foreground mb-2">{{ org }}</h3>
                        <div class="grid grid-cols-2 gap-3">
                            <ProjectCard v-for="project in projects" :key="project.name" :project="project"/>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard.vue';
import { getProjectsByType, groupProjectsByOrganization } from '@/composables/useProjects';

const personalProjects      = getProjectsByType("personal");
const groupedWorkProjects   = groupProjectsByOrganization(getProjectsByType("work"));
const groupedSchoolProjects = groupProjectsByOrganization(getProjectsByType("school"));
</script>
