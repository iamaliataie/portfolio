<template>
    <section id="skills" class="py-2">
        <div class="section container border-b-2 dark:border-gray-900 xl:max-w-7xl w-11/12 px-0 py-20 space-y-8">
            <header class="flex flex-col text-center">
                <h1 class="uppercase text-main font-bold">Technology</h1>
                <h2 class="text-[30px] md:text-[40px] lg:text-[50px] font-bold">Top Skills</h2>
            </header>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-8">
                <div v-motion-slide-visible-once-bottom class="flex flex-row items-center justify-center gap-2 sm:gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-8 rounded-lg">
                    <img src="../assets/skills/python.png" alt="Python" class="filter invert w-6 h-6 sm:w-10 sm:h-fit dark:filter-none">
                    <span class="text-lg sm:text-2xl font-bold">Python</span>
                </div>
                <div v-motion-slide-visible-once-bottom class="flex flex-row items-center justify-center gap-2 sm:gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-8 rounded-lg">
                    <img src="../assets/skills/django.png" alt="Python" class="filter invert w-6 h-6 sm:w-10 sm:h-10 dark:filter-none">
                    <span class="text-lg sm:text-2xl font-bold">Django</span>
                </div>
                <div v-motion-slide-visible-once-bottom class="flex flex-row items-center justify-center gap-2 sm:gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-8 rounded-lg">
                    <img src="../assets/skills/js.png" alt="Python" class="filter invert w-6 h-6 sm:w-10 sm:h-10 dark:filter-none">
                    <span class="text-lg sm:text-2xl font-bold">JavaScript</span>
                </div>
                <div v-motion-slide-visible-once-bottom class="flex flex-row items-center justify-center gap-2 sm:gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-8 rounded-lg">
                    <img src="../assets/skills/ts.png" alt="Python" class="filter invert w-6 h-6 sm:w-10 sm:h-10 dark:filter-none">
                    <span class="text-lg sm:text-2xl font-bold">TypeScript</span>
                </div>       
                <div v-motion-slide-visible-once-bottom class="flex flex-row items-center justify-center gap-2 sm:gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-8 rounded-lg">
                    <img src="../assets/skills/vue.png" alt="Python" class="filter invert w-6 h-6 sm:w-10 sm:h-10 dark:filter-none">
                    <span class="text-lg sm:text-2xl font-bold">VueJS</span>
                </div>
                <div v-motion-slide-visible-once-bottom class="flex flex-row items-center justify-center gap-2 sm:gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-8 rounded-lg">
                    <img src="../assets/skills/tailwind.png" alt="Python" class="filter invert w-6 h-6 sm:w-10 sm:h-10 dark:filter-none">
                    <span class="text-lg sm:text-2xl font-bold">TailwindCSS</span>
                </div>
                <div v-motion-slide-visible-once-bottom class="flex flex-row items-center justify-center gap-2 sm:gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-8 rounded-lg">
                    <img src="../assets/skills/supabase.png" alt="Python" class="filter invert w-6 h-6 sm:w-10 sm:h-10 dark:filter-none">
                    <span class="text-lg sm:text-2xl font-bold">Supabase</span>
                </div>
                <div v-motion-slide-visible-once-bottom class="flex flex-row items-center justify-center gap-2 sm:gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-8 rounded-lg">
                    <img src="../assets/skills/bootstrap.png" alt="Python" class="filter invert w-6 h-6 sm:w-10 sm:h-10 dark:filter-none">
                    <span class="text-lg sm:text-2xl font-bold">Bootstrap</span>
                </div>
            </div>
        </div>
    </section>
</template>
