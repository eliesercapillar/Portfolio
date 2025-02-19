<template>
    <div class="bg-background mx-auto flex max-w-3xl font-sans antialiased border-t-2">
        <section class="mt-8 flex flex-col">
            <div class="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                <div class="flex flex-col">
                    <h1 class="text-5xl text-foreground">Elieser Capillar</h1>
                    <h2 class="pt-2 text-2xl text-foreground">Software Developer</h2>
                    <div class="flex flex-row pt-2">
                        <Icon icon="lucide:map-pin" class="w-6 h-6"/>
                        <p class="ml-2 text-md font-thin inline-block align-bottom text-foreground">GTA, Ontario, Canada 🇨🇦</p>
                    </div>
                    <p class="mt-2 font-light text-foreground">
                        I like to make things 💻, drink smoothies 🥤, 
                        and get coding advice from my dog 
                        <span @click="showPablo" class="hover:cursor-pointer"><b>Pablo 🐶</b></span>.
                    </p>
                    <div class="mt-8 flex items-center gap-8">
                        <Button variant="outline" class="shadow-md">
                            <a href="/resume.pdf" download>Resume</a>
                            <Icon icon="lucide:file-down"/>
                        </Button>
                        <Socials />
                    </div>
                </div>
                <Avatar size="xlg" shape="square">
                    <AvatarImage src="/headshot-alt-1000x1000.jpg" alt="Photo of Elieser" />
                    <AvatarFallback>EC</AvatarFallback>
                </Avatar>
            </div>
        </section>
    </div>

</template>

<script setup lang="ts">
import Socials from '../Socials.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue';

function showPablo()
{
    console.log("Showing Pabby :3")
}
</script>