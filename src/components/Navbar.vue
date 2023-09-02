<script setup>

import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark();
const toggleTheme = useToggle(isDark);
const openMenu = ref(false)

</script>
<template>
    <header class="py-3 fixed top-0 left-0  w-full z-20 h-[80px] bg-slate-50 dark:bg-slate-950">
        <div class="container flex items-center justify-between">
            <div class="flex flex-row space-x-2 items-center justify-start">
                <img src="../assets/a48-3.svg" class="h-full animate-spin-slow" alt="">
            </div>
            <button @click="openMenu = !openMenu" class="md:hidden text-2xl">
                <i class="fa fa-bars"></i>
            </button>
            <ul class="absolute top-[80px] left-0 right-0 h-screen space-y-10 text-xl p-10 transition-transform duration-300 ease-in-out md:text-lg md:space-y-0 md:p-0 md:text-md md:static md:h-auto bg-slate-50 dark:bg-slate-950 flex-col flex md:flex-row md:translate-x-0 items-center md:space-x-10 uppercase font-semibold"
                :class="openMenu ? 'translate-x-0' : 'translate-x-full'">
                <li class="w-full">
                    <a @click="openMenu = false" href="#home" class="">Home</a>
                </li>
                <li class="w-full">
                    <a @click="openMenu = false" href="#portfolio" class="">Portfolio</a>
                </li>
                <li class="w-full">
                    <a @click="openMenu = false" href="#skills" class="">Skills</a>
                </li>
                <li class="w-full">
                    <a @click="openMenu = false" href="#contact" class="bg-sky-600 px-3 py-2 text-white rounded-md">Contact</a>
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

        </div>
    </header>
</template>