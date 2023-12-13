<script setup>
const props = defineProps(['date', 'title', 'organization_title', 'organization_link', 'description'])
</script>
<template>
    <div class="p-8 bg-slate-300 dark:bg-slate-800 rounded-xl h-full">
        <div class="flex flex-col space-y-2">
            <p class="text-lg sm:text-xl font-extrabold text-sky-700">{{ date }}</p>
            <p class="font-semibold text-[24px] sm:text-3xl ">{{ title }}</p>
            <a class="underline font-semibold" :href=organization_link target="_blank">{{ organization_title }}</a>
            <p class="text-lg text-justify">{{ description }}</p>
        </div>
    </div>
</template>
