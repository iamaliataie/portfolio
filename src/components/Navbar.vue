<script setup>

import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark();
const toggleTheme = useToggle(isDark);
const openMenu = ref(false)

</script>
<template>
    <header class="py-3 fixed top-0 left-0  w-full z-20  bg-slate-50 dark:bg-slate-950">
        <div class="container flex items-center justify-between">
            <div class="flex flex-row space-x-2 items-center justify-start">
                <img src="../assets/logo.svg" class="w-10 animate-spin-slow" alt="">
            </div>

            <div class="flex items-center space-x-3 md:space-x-6">
                <ul class="absolute top-[60px] left-0 right-0 h-screen space-y-10 text-xl p-10 transition-transform duration-300 ease-in-out md:text-lg md:space-y-0 md:p-0 md:text-md md:static md:h-auto bg-slate-50 dark:bg-slate-950 flex-col flex md:flex-row md:translate-x-0 items-center md:space-x-10 font-semibold"
                :class="openMenu ? 'translate-x-0' : 'translate-x-full'">
                    <li class="w-full">
                        <a @click="openMenu = false" href="#home" aria-label="home" class="">Home</a>
                    </li>
                    <li class="w-full">
                        <a @click="openMenu = false" href="#portfolio" aria-label="portfolio" class="">Portfolio</a>
                    </li>
                    <li class="w-full">
                        <a @click="openMenu = false" href="#skills" aria-label="skills" class="">Skills</a>
                    </li>
                    <li class="w-full">
                        <a @click="openMenu = false" href="#contact" aria-label="contact" class="">Contact</a>
                    </li>
                    <li class="md:hidden">
                        <div class="flex flex-col space-y-4">
                            <div class="flex items-center space-x-6 justify-center">
                                <a href="https://github.com/iamaliataie" target="_blank"><i class="fa-brands fa-github text-sky-600 text-4xl"></i></a>
                                <a href="https://linkedin.com/in/iamaliataie" target="_blank"><i class="fa-brands fa-linkedin text-sky-600 text-4xl"></i></a>
                                <a href="https://instagram.com/iamaliataie" target="_blank"><i class="fa-brands fa-instagram text-sky-600 text-4xl"></i></a>
                            </div>
                            <div class="text-center">
                                <span class="text-slate-400 text-sm">&copy; 2023. All Rights Reserved</span>
                            </div>
                        </div>
                    </li>
                </ul>

                <div>
                    <button @click="toggleTheme()" v-if="isDark" class="text-xl md:text-lg">
                        <i class="fa fa-moon "></i>
                    </button>
                    <button @click="toggleTheme()" v-else class="text-xl md:text-lg">
                        <i class="fa fa-sun "></i>
                    </button>
                </div>

                <div class="md:hidden">
                    <button v-if="openMenu" @click="openMenu = !openMenu" class="text-2xl w-5">
                        <i class="fa fa-times"></i>
                    </button>
                    <button v-else @click="openMenu = !openMenu" class="text-xl w-5">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>

            </div>
        </div>
    </header>
</template>
