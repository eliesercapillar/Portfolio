<template>
    <button class="bg-transparent text-white text-sm rounded max-h-[64px] max-w-[64px] px-3 py-0.5 font-semibold">
        <img :src="iconPath" alt="Icon"class="w-5 h-5 mr-auto hover:bg-[#821]"></img>
        <slot/>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    icon: String,
});

const iconPath = computed(() => new URL(`../assets/svgs/${props.icon}`, import.meta.url).href);

</script>