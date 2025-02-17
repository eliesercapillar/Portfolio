<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20 ">
        <!-- Mobile Toggle Button -->
         <div class="md:hidden z-30">
            <button type="button" class="block text-muted-foreground hover:text-foreground" @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-5xl">
                    <Icon icon="lucide:x"></Icon>
                </span>
                <span v-else class="text-5xl">
                    <Icon icon="lucide:menu"></Icon>
                </span>
            </button>
        </div>
        <!-- Navbar Link -->
        <nav :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
            isMenuOpen ? 'block':'hidden']">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="page in Pages.data" :key="page.name">
                    <a :href="page.href" class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg"
                    @click="openPage(page.href)"
                    >
                        {{ page.name }}
                    </a>
                </li>
                <ModeToggle/>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import ModeToggle from './ModeToggle.vue';
import Pages from '@/data/Pages.json'


const isMenuOpen = ref(false)
const openPage = (href : string) => 
{
    isMenuOpen.value=false;
    // const section=document.querySelector(href);
    // if(section){
    //     section.scrollIntoView({behavior :'smooth'});
    // }

}

</script>