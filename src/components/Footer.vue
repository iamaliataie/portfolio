<script setup>
const year = new Date().getFullYear();
</script>
<template>
    <div class="bg-slate-100 text-gray-900 dark:bg-gray-950 dark:text-zinc-50 py-12">
        <div class="container flex flex-col items-center justify-center gap-8">
            <div class="flex flex-col items-center gap-2">
                <img src="../assets/ataie-logo.svg" alt="ataie" class="w-14">
                <h2 class="text-[23px]">Ali Ahmad Ataie</h2>
            </div>
            <div class="flex flex-row gap-4 text-xl">
                <a href="https://github.com/iamaliataie" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-github"></i></a>
                <a href="https://linkedin.com/in/iamaliataie" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/iamaliataie" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://instagram.com/iamaliataie" target="_blank" class="w-10 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div class="text-zinc-500 text-sm">
                <span>&copy; {{ year }} All Rights Reserved</span>
            </div>
        </div>
    </div>
</template>
