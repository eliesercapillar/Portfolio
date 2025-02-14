<template>
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased">
        <div class="mb-8 flex items-center gap-6" style="opacity:1; transform: none;">
            <div class="relative">
                <div class="absolute inset-[-4px] rounded-full">
                    <svg width="200" height="200" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
                </div>
                <div class="absolute inset-0 bg-blue-500 rounded-full" style="opacity: 0;"></div>
                <div class="relative w-24 h-24 rounded-full overflow-hidden cursor-pointer">
                    <div style="opacity: 1;">
                        <img src="../assets/img/headshot-alt-1000x1000.jpg" alt="Photo of Elieser" width="200" height="200" loading="lazy"
                                    class="w-48 h-48 max-w-[200px] rounded-full object-cover"
                                    >
                    </div>
                </div>
            </div>
            <div>
                <h1 class="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">Hi, I am Elieser Capillar,</h1>
                <p class="font-light text-black-400 dark:text-zinc-300 text-xs md:text-sm">a <b>software developer</b> specializing in UI design and creating engaging user experiences with a strong attention to detail.</p>
                <span class="relative mt-2 text-xs md:text-sm font-light inline-flex items-center text-black-400 dark:text-zinc-200">Mississauga, Ontario, Canada</span>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

</script>