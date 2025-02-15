<template>
    <div class="mx-auto flex max-w-3xl flex-col px-8 font-sans antialiased">
        <article className="mt-8 flex flex-col gap-16 pb-16">
            <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                <img src="../../assets/img/headshot-alt-1000x1000.jpg" alt="Photo of Elieser" width="200" height="200" loading="lazy"
                                    class="w-48 h-48 max-w-[200px] rounded-full object-cover"
                                    >
                <div className="flex flex-col">
                    <h1 className="title text-5xl">Hi, I am Elieser Capillar,</h1>
                    <p className="mt-4 font-light">
                        a <b><s>Game</s> Software Developer</b> currently based in <b>Mississauga, Ontario!</b>
                    </p>
                    <p className="mt-2 font-light">
                        I like to develop full-stack, drink instant coffee and get coding
                        advice from my cat.
                    </p>
                    <!-- <div className="mt-4 flex items-end gap-1">
                        <p className="font-semibold">Ask the chatbot anything about me</p>
                    </div> -->
                    <section className="mt-8 flex items-center gap-8">
                        <a href="../../../docs/Resume_Elieser_Capillar.pdf" target="_blank">
                            <button variant="outline">
                                <span className="font-semibold">Resume</span>
                            </button>
                        </a>
                        <Socials />
                    </section>
                </div>
            </section>
        </article>
    </div>

</template>

<script setup lang="ts">
import Socials from '../Socials.vue';


</script>