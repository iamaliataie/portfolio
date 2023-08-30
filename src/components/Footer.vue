<script setup>
const year = new Date().getFullYear();
</script>
<template>
    <div class="bg-slate-100 text-gray-900 dark:bg-gray-950 dark:text-zinc-50 py-12">
        <div class="container flex flex-col items-center justify-center gap-8">
            <div class="flex flex-row space-x-2 items-center">
                    <img src="../assets/favicon.svg" class="w-16 h-full" alt="logo">
                    <div class="flex flex-col -space-y-2">
                        <span class="text-5xl text-main font-semibold">Ataie</span>
                        <span class="text-2xl font-semibold">Ali Ahmad</span>
                    </div>
                </div>
            <div class="flex flex-row gap-4 text-xl">
                <a aria-label="github"
                    href="https://github.com/iamaliataie" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-github"></i></a>
                <a aria-label="linkedin"
                    href="https://linkedin.com/in/iamaliataie" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-linkedin"></i></a>
                <a aria-label="instagram"
                    href="https://instagram.com/ataie.dev" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div class="text-zinc-500 text-sm">
                <span>&copy; {{ year }} All Rights Reserved</span>
            </div>
        </div>
    </div>
</template>
