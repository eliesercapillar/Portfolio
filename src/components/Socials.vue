<template>
    <div>
        <LinkWithIcon v-for="t in Socials.data" :icon="t.icon" :key="t.name"></LinkWithIcon>
    </div>
</template> 

<script setup lang="ts">
import LinkWithIcon from "./LinkWithIcon.vue";
import Socials from "../data/Socials.json"

</script>