<script setup>

const props = defineProps(['about']);

</script>

<template>
    <section id="about" class="py-2">
        <div class="section container border-b-2 dark:border-gray-900 xl:max-w-[1124px] w-11/12 px-0 py-20 space-y-8">
            <div
            v-motion
            :initial="{ opacity: 0, x: -80 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { type: 'keyframes', duration: 500, ease: 'easeIn'}}"
            class="flex flex-col sm:flex-row gap-10">
                <div class="relative sm:self-auto sm:h-auto sm:w-3/6 overflow-hidden rounded-xl">
                        <div class="absolute bottom-0 left-0 bg-slate-200 w-full dark:bg-gray-900 h-full rounded-xl -z-10"></div>
                        <img src="../assets/ataie-main.png" alt="ataie" class="sm:absolute sm:bottom-0 sm:left-0 xl:static w-full h-full object-center object-cover z-10">
                    </div>
                <div class="sm:w-5/6">
                    <div class="flex flex-col space-y-6 sm:items-start sm:space-y-4 md:space-y-8" >
                        <div class="font-bold">
                            <h4 class="text-2xl sm:text-lg md:text-2xl lg:text-3xl">Hello, <span class="text-main">I'm</span></h4>
                            <h1 class="text-[43px] sm:text-4xl md:text-5xl lg:text-7xl">Ali Ahmad Ataie</h1>
                        </div>
                        <div class="xl:w-5/6">
                            <p class="sm:text-sm lg:text-lg">{{ about }}</p>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <p class="uppercase font-semibold sm:text-sm md:text-[16px]">follow me on</p>
                            <div class="flex flex-row items-center gap-4">
                                <a href="https://github.com/iamaliataie" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-github"></i></a>
                                <a href="https://linkedin.com/in/iamaliataie" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="https://instagram.com/ataie.dev" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>