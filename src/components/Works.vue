<script setup>

const baseUrl = 'https://fasxyiajvwstushdwzxo.supabase.co/storage/v1/object/public/images/works/'

const props = defineProps(['works'])

</script>

<template>
    <section id="portfolio" class="py-2" >
        <div class="section container border-b-2 dark:border-gray-900 xl:max-w-7xl w-11/12 px-0 py-20 space-y-8">
            <header class="flex flex-col text-center">
                <h6 class="uppercase text-main font-bold">award winning projects</h6>
                <h1 class="text-[30px] md:text-[40px] lg:text-[50px] font-bold">Latest Projects</h1>
            </header>
            <div class="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="work in works"
                :key="work.id"
                v-motion-slide-visible-once-bottom
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
            </div>
        </div>
    </section>
</template>