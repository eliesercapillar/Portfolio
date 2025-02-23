<template>
    <footer class="mx-auto flex max-w-3xl w-full mb-10 border-t-2">
        <section class="mt-8 w-full flex items-center justify-between">
            <p class="text-center text-xs text-muted-foreground tracking-wide">
                <span>&copy; {{ new Date().getFullYear() }}</span>
                <RouterLink class="link" to="/"> eliesercapillar.dev</RouterLink>
                <span> | All rights reserved.</span>
            </p>
            <Socials/>
        </section>
    </footer>
</template>

<script setup lang="ts">
import Socials from '@/components/Socials.vue';
</script>