<script setup>
const year = new Date().getFullYear();
</script>
<template>
    <div class="bg-black py-8">
        <div class="container flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex flex-col md:flex-row space-x-2 items-center">
                <img src="../assets/a48-3.svg" class="w-24 md:w-auto animate-spin-slow" alt="">
                <span class="text-4xl text-slate-100 font-semibold">Ali Ahmad Ataie</span>
            </div>
            <div class="flex flex-col space-y-4">
                <div class="flex items-center space-x-6 justify-center">
                    <a href="#"><i class="fa-brands fa-github text-sky-600 text-4xl"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin text-sky-600 text-4xl"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram text-sky-600 text-4xl"></i></a>
                </div>
                <div class="text-center">
                    <span class="text-slate-400 text-sm">&copy; 2023. All Rights Reserved</span>
                </div>
            </div>
        </div>
    </div>
</template>
