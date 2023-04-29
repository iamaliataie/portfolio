<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark();
const toggleTheme = useToggle(isDark);

</script>
<template>
    <header class="py-4 md:py-5 fixed top-0 left-0  w-full bg-slate-50 dark:bg-gray-900 z-50">
        <div class="container flex items-center justify-between md:px-0 lg:px-16 xl:px-24">
            <div>
                <img src="../assets/ataie-logo.svg" class="w-6" alt="">
            </div>
            <div class="relative font-semibold flex flex-row-reverse gap-3 md:flex-row md:gap-12 items-center">
                <ul id="menu" class="flex flex-col fixed top-0 left-0 pt-20 px-6 pb-6 items-start gap-2 w-full shadow-lg bg-slate-50 border-b-2 border-gray-950 uppercase dark:bg-gray-900 text-lg transition translate-x-full ease-in-out duration-300 -z-10 rounded-b-md dark:shadow-slate-900 md:hidden dark:border-slate-100"
                >
                    <a href="#home" class="mobile-nav-link w-full bg-slate-200 py-2 pl-4 rounded-md hover:bg-slate-300 dark:bg-gray-950 dark:hover:bg-gray-800">Home</a>
                    <a href="#about" class="mobile-nav-link w-full bg-slate-200 py-2 pl-4 rounded-md hover:bg-slate-300 dark:bg-gray-950 dark:hover:bg-gray-800">About</a>
                    <a href="#portfolio" class="mobile-nav-link w-full bg-slate-200 py-2 pl-4 rounded-md hover:bg-slate-300 dark:bg-gray-950 dark:hover:bg-gray-800">Portfolio</a>
                    <a href="#skills" class="mobile-nav-link w-full bg-slate-200 py-2 pl-4 rounded-md hover:bg-slate-300 dark:bg-gray-950 dark:hover:bg-gray-800">Skills</a>
                    <a href="#contact" class="mobile-nav-link w-full bg-slate-200 py-2 pl-4 rounded-md hover:bg-slate-300 dark:bg-gray-950 dark:hover:bg-gray-800">Contact</a>
                </ul>
                <ul  class="hidden text-sm lg:text-md md:flex flex-row gap-6 lg:gap-8 bg-transparent dark:bg-transparent items-center uppercase">
                    <a href="#home" class="nav-link hover:border-b-2 hover:border-dotted border-gray-950 dark:border-slate-50 selected">Home</a>
                    <a href="#about" class="nav-link hover:border-b-2 hover:border-dotted border-gray-950 dark:border-slate-50">About</a>
                    <a href="#portfolio" class="nav-link hover:border-b-2 hover:border-dotted border-gray-950 dark:border-slate-50">Portfolio</a>
                    <a href="#skills" class="nav-link hover:border-b-2 hover:border-dotted border-gray-950 dark:border-slate-50">Skills</a>
                    <a href="#contact" class="nav-link hover:border-b-2 hover:border-dotted border-gray-950 dark:border-slate-50">Contact</a>
                </ul>
            </div>
            <div class="flex flex-row gap-4">
                <button class="w-6 flex items-center justify-center text-xl md:text-md xl:text-lg" @click="toggleTheme()">
                    <span v-if="isDark">
                        <i class="fa fa-sun "></i>
                    </span>
                    <span v-else>
                        <i class="fa fa-moon"></i>
                    </span>
                </button>
                <div class="md:hidden z-20 text-2xl w-6">
                    <button id="bars-button" class="md:hidden ">
                        <i class="fa fa-bars"></i>
                    </button>
                    <button id="times-button" class="hidden md:hidden">
                        <i class="fa fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>