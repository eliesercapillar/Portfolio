<template>
    <div class="mx-auto flex max-w-3xl">
        <section class="mt-8">
            <div class="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
                <div class="flex flex-col font-normal">
                    <h1 class="font-spaceGrotesk font-semibold text-5xl">Elieser Capillar</h1>
                    <h2 class="pt-2 text-2xl">Software Developer</h2>
                    <div class="flex flex-row pt-2">
                        <Icon icon="lucide:map-pin" class="w-6 h-6"/>
                        <p class="ml-2 text-md">GTA, Ontario, Canada 🇨🇦</p>
                    </div>
                    <p class="mt-2 text-muted-foreground">
                        I like to make things 💻, drink smoothies 🥤, 
                        and get coding advice from my best friend 
                        <span @click="showPablo" class="hover:cursor-pointer hover:text-foreground">Pablo 🐶</span>.
                    </p>
                    <div class="mt-8 flex items-center gap-8">
                        <a href="/resume.pdf" download>
                            <Button variant="outline" class="shadow-md flex items-center gap-2">
                                <p class="text-sm font-semibold">Resume</p>
                                <Icon icon="lucide:file-down"/>
                            </Button>
                        </a>
                        <Socials />
                    </div>
                </div>
                <Avatar size="xlg" shape="circle">
                    <AvatarImage :src="getHeadshot()" alt="Photo of Elieser" />
                    <AvatarFallback>EC</AvatarFallback>
                </Avatar>
            </div>
        </section>
    </div>

</template>

<script setup lang="ts">
import Socials from '@/components/Socials.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';

let pabloPictureOn = ref(false);
let preloadedPablo = new Image();
let preloadedMain = new Image();

// Preload the alternate image when component mounts
onMounted(() => {
    preloadedPablo.src = "/headshot-alt-1000x1000.jpg";
    preloadedMain.src = "/headshot-main-1000x1000.jpg";
});

function getHeadshot() {
    return pabloPictureOn.value ? "/headshot-alt-1000x1000.jpg" : "/headshot-main-1000x1000.jpg";
}

function showPablo() {
    pabloPictureOn.value = !pabloPictureOn.value;
}
</script>