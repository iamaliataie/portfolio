<script setup>

const baseUrl = 'https://fasxyiajvwstushdwzxo.supabase.co/storage/v1/object/public/images/works/'

const props = defineProps(['loading', 'works'])

</script>

<template>
    <section id="portfolio" class="py-2 bg-slate-200 dark:bg-slate-800">
        <div class="section container py-32">
            <div class="flex justify-center items-center">
                <div>
                    <p class="font-bold text-lg uppercase text-sky-700">Portfolio</p>
                    <h1 class="text-4xl sm:text-5xl font-bold mb-16">My Latest Projects</h1>
                </div>
            </div>
            <div class="flex flex-col space-y-10">
                <div
                    v-for="(work, index) in works"
                    class="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-950">
                    <div 
                    class="flex flex-col justify-center items-center space-y-12 p-8 sm:px-14 md:px-8 lg:px-10 xl:p-20"
                    :class="(index%2 == 0) ? 'order-2 md:order-1' : 'order-2'"
                    >
                        <div class="text-start w-full">
                            <h1
                                class="text-[22px] sm:text-4xl md:text-[25px] lg:text-[34px] xl:text-[38px] font-bold text-slate-900 dark:text-slate-100">
                                {{ work.title }}</h1>
                            <p class="sm:text-xl md:text-lg lg:text-xl mt-4 text-justify">{{ work.description }}</p>
                        </div>
                        <div class="text-start w-full flex items-center space-x-4">
                            <a :href="`https://${work.demo}`" aria-label="demo"
                                class="flex-1 sm:flex-none text-center uppercase p-2 sm:px-6 sm:py-4 rounded-md bg-sky-600 text-white font-semibold">demo</a>
                            <a :href="`https://${work.github}`" aria-label="source"
                                class="flex-1 sm:flex-none text-center uppercase p-2 sm:px-6 sm:py-4 rounded-md bg-sky-600 text-white font-semibold">source</a>
                        </div>
                    </div>
                    <div class="h-full w-full"
                    :class="(index % 2 == 0) ? 'order-1 md:order-2' : 'order-1'"
                    >
                        <img :src="`${baseUrl}${work.image}`" alt="image" class="w-full h-full object-cover">
                    </div>
                </div>
        </div>
    </div>
</section></template>