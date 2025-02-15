<template>
    <div>
        <LinkWithIcon v-for="t in technologies.data" :icon="t.icon" :key="t.name">{{ t.description }}</LinkWithIcon>
    </div>
</template> 

<script setup lang="ts">
import LinkWithIcon from "./LinkWithIcon.vue";
import technologies from "../data/Technologies.json"

</script>