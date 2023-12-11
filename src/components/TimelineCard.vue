<script setup>
const props = defineProps(['date', 'title', 'organization'])
</script>
<template>
    <div class="p-8 bg-slate-300 dark:bg-slate-800 rounded-xl">
        <div class="flex flex-col space-y-2">
            <p class="text-xl font-extrabold text-sky-700">{{ date }}</p>
            <p class="font-semibold text-[28px] sm:text-3xl ">{{ title }}</p>
            <a class="underline font-semibold" :href=organization.link target="_blank">{{ organization.title }}</a>
        </div>
    </div>
</template>