<template>
    <Card class="flex flex-col gap-2 overflow-hidden rounded-lg shadow-md border">
        <div class="w-full h-[150px]">
            <a :href="project.href" target="_blank">
                <img :src="project.img" alt="Project Image"
                    class="w-full h-40 object-cover object-top transition-transform duration-300 hover:scale-105" />
            </a>
        </div>
        <div class="flex flex-col justify-between p-4 w-full h-full">
            <!-- Header -->
            <CardHeader class="p-0">
                <CardTitle class="text-lg font-semibold text-foreground">{{ project.name }}</CardTitle>
                <CardDescription class="text-muted-foreground text-xs">{{ project.description }}</CardDescription>
            </CardHeader>

            <!-- Tags -->
            <CardContent class="p-0 mt-2 flex flex-wrap gap-1">
                <Badge v-for="tag in project.tags" :key="tag" class="text-xs px-2 py-1 bg-primary/10" variant="secondary">
                    {{ tag }}
                </Badge>
            </CardContent>

            <!-- Links -->
            <CardFooter class="p-0 mt-3 flex flex-wrap gap-1">
                <Button v-for="link in project.links" :key="link.name" variant="secondary" size="sm">
                    <a :href="link.href" target="_blank" class="flex items-center gap-2">
                        <p class="text-sm">{{ link.name }}</p>
                        <Icon :icon="link.icon" class="size-4 inline" />
                    </a>
                </Button>
            </CardFooter>
        </div>
    </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue/dist/iconify.js';

defineProps<{ 
    project: {
        "name": string;
        "description": string;
        "href": string;
        "img": string;
        "tags": string[];
        "links": {
            name: string;
            href: string;
            icon: string;
        }[];
    }
 }>();

</script>