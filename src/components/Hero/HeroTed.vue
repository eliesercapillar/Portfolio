<template>
    <div class="bg-background mx-auto flex max-w-3xl px-8 font-sans antialiased">
        <section class="mt-8 flex flex-col">
            <div class="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                <Avatar size="lg" shape="square">
                    <AvatarImage src="/headshot-alt-1000x1000.jpg" alt="Photo of Elieser" />
                    <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <!-- <img src="/img/headshot-alt-1000x1000.jpg" alt="Photo of Elieser" width="200" height="200" loading="lazy"
                                    class="w-48 h-48 max-w-[200px] rounded-full object-cover"
                                    > -->
                <div class="flex flex-col">
                    <h1 class="text-5xl text-white">Hi, I am Elieser Capillar,</h1>
                    <p class="mt-4 font-light text-white">
                        a <b><s>Game</s> Software Developer</b> currently based in <b>Mississauga, Ontario!</b>
                    </p>
                    <p class="mt-2 font-light text-white">
                        I like to develop full-stack, drink instant coffee and get coding
                        advice from my cat.
                    </p>
                    <div class="mt-8 flex items-center gap-8">
                        <Button variant="outline">
                            <a href="/resume.pdf" download>Resume</a>
                            <Icon icon="lucide:file-down"></Icon>
                        </Button>
                        <Socials />
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script setup lang="ts">
import Socials from '../Socials.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue';

</script>