<template>
    <Card>
        <CardContent class="p-0">
            <ul class="ml-10 border-l-2">
                <TimelineEntry v-for="(entry, i) in entries" :key="i" :job="entry" />
            </ul>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { Card, CardContent } from './ui/card';
import TimelineEntry from '@/components/TimelineEntry.vue';

defineProps<{ entries: any[] }>();
</script>
