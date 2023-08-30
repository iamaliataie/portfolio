<script setup>

const baseUrl = 'https://fasxyiajvwstushdwzxo.supabase.co/storage/v1/object/public/images/self/'

const props = defineProps(['about']);

</script>

<template>
    <!-- <section id="about" class="py-2">
        <div class="section container border-b-2 dark:border-gray-900 xl:max-w-[1124px] w-11/12 px-0 py-20 space-y-8">
            <div
            v-motion
            :initial="{ opacity: 0, x: -80 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { type: 'keyframes', duration: 500, ease: 'easeIn'}}"
            class="flex flex-col sm:flex-row gap-10">
                <div class="relative sm:self-auto sm:h-auto sm:w-3/6 overflow-hidden rounded-xl">
                        <div class="absolute bottom-0 left-0 bg-slate-200 w-full dark:bg-gray-900 h-full rounded-xl -z-10"></div>
                        <img :src="`${baseUrl}${about.photo}`" alt="ataie" class="sm:absolute sm:bottom-0 sm:left-0 xl:static w-full h-full object-center object-cover z-10">
                    </div>
                <div class="sm:w-5/6">
                    <div class="flex flex-col space-y-6 sm:items-start sm:space-y-4 md:space-y-8" >
                        <div class="xl:w-5/6">
                            <p class="sm:text-sm lg:text-lg">{{ about.text }}</p>
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
    </section> -->
    <section id="about" class="py-2 bg-main text-white">
        <div class="section container  xl:max-w-7xl py-20 space-y-8 min-h-screen flex items-center justify-center">
            <div
            v-motion
            :initial="{ opacity: 0, x: -80 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { type: 'keyframes', duration: 500, ease: 'easeIn'}}"
            class="flex flex-col md:flex-row gap-10 px-2 sm:p-0 xl:w-10/12 mx-auto items-center">
                <img fetchpriority="high" src="../assets/self.webp" alt="ataie" class="w-full sm:w-96 md:w-60 lg:w-80 h-full rounded-md">
                <div class="sm:w-3/4" >
                    <p class="text-justify md:text-sm lg:text-xl">I have completed my bachelor's degree in computer science in 2022. I am a web developer from Kabul, Afghanistan with a vast array of knowledge in many different frontend and backend languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can be.</p>
                    <p class="text-justify md:text-sm lg:text-xl mt-6">In my leisure time, I enjoy reading poets and novels and spending quality time with my beloved family.</p>
                    <a href="CV-AliAhmadAtaie.pdf" target="_blank" class="text-md px-3 py-2 rounded-md bg-white text-main mt-6 inline-block">Download CV</a>
                </div>
            </div>
        </div>
    </section>
</template>
