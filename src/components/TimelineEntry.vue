<template>
    <li class="relative ml-10 py-4">
        <a :href="job.href" target="_blank" class="absolute -left-16 top-4 flex items-center justify-center rounded-full">
            <Avatar class="size-12 border">
                <AvatarImage :src="job.logo" :alt="`Logo of ${ job.name }`" class="bg-background object-contain"/>
                <AvatarFallback>{{ job.name[0] }}</AvatarFallback> 
            </Avatar>
            <div class="absolute inset-0 bg-gray-900/50 flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition-opacity">
                <Icon icon="lucide:external-link" class="size-6 text-white" />
            </div>
        </a>
        <div class="flex flex-1 flex-col justify-start gap-1">
            <time v-if="job.start_date" class="font-supreme font-light text-xs text-muted-foreground">
                <span>{{ job.start_date }}</span>
                <span> - </span>
                <span>{{ job.end_date ? job.end_date : "Present" }}</span>
            </time>
            <h2 class="font-supreme font-semibold leading-none">{{ job.name }}</h2>
            <p v-if="job.title" class="font-supreme font-normal text-sm text-muted-foreground italic">{{ job.title }}</p>
            <ul v-if="job.description.length > 0" class="ml-4 list-outside list-disc">
                <li v-for="(desc, i) in job.description" :key="i" class="pr-8 text-sm font-supreme font-normal leading-relaxed">
                    {{ desc }}
                </li>
            </ul>
            </div>
            <div v-if="job.links.length > 0" class="mt-2 flex flex-row flex-wrap items-start gap-2">
            <!-- <a v-for="(link, idx) in job.links" :href="link.href" :key="idx" class="flex gap-2">
                <Badge :title="link.name">
                    <Icon :name="link.icon" aria-hidden="true" class="size-3" />
                    {{ link.name }}
                </Badge>
            </a> -->
        </div>
    </li>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icon } from '@iconify/vue'

defineProps<{
    job: {
        "name": string;
        "href": string;
        "title": string;
        "logo": string;
        "start_date": string;
        "end_date": string;
        "description": string[];
        "links": string[];
    }
}>()
</script>