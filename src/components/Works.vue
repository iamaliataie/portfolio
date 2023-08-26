<script setup>

const baseUrl = 'https://fasxyiajvwstushdwzxo.supabase.co/storage/v1/object/public/images/works/'

const props = defineProps(['loading', 'works'])

</script>

<template>
    <section id="portfolio" class="py-2" >
        <div class="section container border-b-2 dark:border-gray-900 xl:max-w-7xl w-11/12 px-0 py-20 space-y-8">
            <header class="flex flex-col text-center">
                <h6 class="uppercase text-main font-bold">award winning projects</h6>
                <h1 class="text-[30px] md:text-[40px] lg:text-[50px] font-bold">Latest Projects</h1>
            </header>
            <div
                v-if="loading"
                class="grid grid-cols-1 items-center  md:grid-cols-2 gap-6">
                    <div class="">
                        <div class="animate-pulse flex items-center justify-center h-72 bg-slate-300 rounded dark:bg-slate-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="animate-pulse flex items-center justify-center h-72 bg-slate-300 rounded dark:bg-slate-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            <!-- <div
            v-else
            class="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="work in works"
                :key="work.id"
                class="work relative rounded-xl overflow-hidden shadow-md">
                    <img :src="`${baseUrl}${work.image}`" class="w-full transition duration-300" alt="">
                    <div class="absolute top-0 left-0 w-full h-full flex flex-col gap-2 p-8 sm:p-6 md:p-4 lg:p-6 xl:p-10 items-start justify-end bg-black/80 overflow-hidden translate-y-full transition duration-300">
                        <p class="text-2xl text-slate-50 md:text-lg lg:text-2xl">{{ work.title }}</p>
                        <p class="text-sm text-slate-50 md:text-xs lg:text-sm">{{ work.description }}</p>
                        <div class="flex flex-row gap-4 text-xl md:text-sm lg:text-lg">
                            <a :href="`https://${work.github}`" target="_blank" class="text-slate-50"><i class="fa-brands fa-github"></i></a>
                            <a :href="`https://${work.demo}`" target="_blank" class="text-slate-50"><i class="fa fa-eye"></i></a>
                        </div>
                    </div>
                </div>
            </div> -->
            <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                v-for="work in works"
                class="shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-10 px-8 sm:py-12 sm:px-20 md:py-8 md:px-12 lg:py-12 lg:px-16 xl:px-20 xl:py-16 rounded-lg">
                    <div class="flex flex-col space-y-10">
                        <div class="text-center flex flex-col space-y-6">
                            <h2 class="text-2xl sm:text-4xl md:text-[23px] lg:text-3xl xl:text-4xl font-bold text-center">{{ work.title }}</h2>
                            <p class="text-lg sm:text-2xl md:text-lg lg:text-xl xl:text-2xl">{{ work.description }}</p>
                            <div class="flex justify-center items-center space-x-4">
                                <a :href="`https://${work.github}`" target="_blank" class="px-3 py-1 bg-slate-200 dark:bg-slate-800 sm:text-xl md:text-[15px] lg:text-xl rounded-md hover:bg-slate-400 dark:hover:bg-slate-950">Github</a>
                                <a :href="`https://${work.demo}`" target="_blank" class="px-3 py-1 bg-slate-200 dark:bg-slate-800 sm:text-xl md:text-[15px] lg:text-xl rounded-md hover:bg-slate-400 dark:hover:bg-slate-950">Live Demo</a>
                            </div>
                        </div>
                        <div class="w-full">
                            <img :src="`${baseUrl}${work.image}`" alt="image" class="w-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>