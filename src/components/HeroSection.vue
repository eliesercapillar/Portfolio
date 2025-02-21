<template>
    <div class="mx-auto flex max-w-3xl font-sans antialiased">
        <section class="mt-8 flex flex-col">
            <div class="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                <Avatar size="xlg" shape="circle">
                    <AvatarImage v-if="!pabloPictureOn" src="/headshot-main-1000x1000.jpg" alt="Photo of Elieser" />
                    <AvatarImage v-else src="/headshot-alt-1000x1000.jpg" alt="Photo of Elieser" />
                    <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <div class="flex flex-col">
                    <h1 class="font-spaceGrotesk font-semibold text-5xl text-foreground">Elieser Capillar</h1>
                    <h2 class="font-supreme font-normal pt-2 text-2xl text-foreground">Software Developer</h2>
                    <div class="flex flex-row pt-2">
                        <Icon icon="lucide:map-pin" class="w-6 h-6"/>
                        <p class="ml-2 font-supreme font-normal text-md inline-block align-bottom">GTA, Ontario, Canada 🇨🇦</p>
                    </div>
                    <p class="mt-2 font-supreme font-normal text-muted-foreground">
                        I like to make things 💻, drink smoothies 🥤, 
                        and get coding advice from my best friend 
                        <span @click="showPablo" class="hover:cursor-pointer hover:text-foreground">Pablo 🐶</span>.
                    </p>
                    <div class="mt-8 flex items-center gap-8">
                        <a href="/resume.pdf" download>
                            <Button variant="outline" class="shadow-md flex items-center gap-2">
                                <p class="text-sm">Resume</p>
                                <Icon icon="lucide:file-down"/>
                            </Button>
                        </a>
                        <Socials />
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script setup lang="ts">
import Socials from '@/components/Socials.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

let pabloPictureOn = ref(false);

function showPablo()
{
    pabloPictureOn.value = !pabloPictureOn.value;
}
</script>