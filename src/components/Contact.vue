<template>
    <section id="contact" class="py-2">
        <div class="section container border-b-2 dark:border-gray-900 xl:max-w-[1124px] w-11/12 px-0 py-16 space-y-8">
            <header class="flex flex-col text-center">
                <h6 class="uppercase text-main-red font-bold">Contact</h6>
                <h1 class="text-[30px] md:text-[40px] lg:text-[50px] font-bold">Contact With Me</h1>
            </header>
            <div class="flex flex-col md:flex-row items-left justify-left gap-8">
                <div class="md:w-4/12 flex flex-col sm:grid sm:grid-cols-2 md:flex gap-4">
                    <div class="flex justify-center sm:flex-col items-center gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-7 rounded-lg">
                        <i class="fa fa-map text-main-red text-3xl"></i>
                        <span class="sm:text-sm">Kabul, Afghanistan</span>
                    </div>
                    <div class="flex justify-center sm:flex-col items-center gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-7 rounded-lg">
                        <i class="fa fa-phone text-main-red text-3xl"></i>
                        <a href="tel:+93767014769" class="sm:text-sm">+93 - 767 - 014 - 769</a>
                    </div>
                    <div class="flex justify-center sm:flex-col items-center gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-7 rounded-lg">
                        <i class="fa fa-envelope text-main-red text-3xl"></i>
                        <a href="mailto:iamaliataie@gmail.com" class="sm:text-sm">iamaliataie@gmail.com</a>
                    </div>
                    <div class="flex justify-center sm:flex-col items-center gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-7 rounded-lg">
                        <i class="fa fa-check-circle text-main-red text-3xl"></i>
                        <span class="sm:text-sm">Freelance Available</span>
                    </div>
                </div>
                <div class="md:w-8/12 rounded-lg bg-slate-50 dark:bg-gray-900 dark:shadow-black shadow-lg p-6 sm:p-12 md:p-6 lg:p-12">
                    <form class="space-y-6 sm:space-y-8">
                        <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-4 lg:gap-8">
                            <input type="text" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none" placeholder="Enter your name">
                            <input type="text" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none" placeholder="Enter your phone">
                        </div>
                        <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-4 lg:gap-8">
                            <input type="email" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none" placeholder="Enter your email">
                            <input type="text" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none" placeholder="Enter your subject">
                        </div>
                        <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-4 lg:gap-8">
                            <textarea name="" id="" cols="30" rows="7" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none resize-none" placeholder="Type your message"></textarea>
                        </div>
                        <div class="flex justify-center">
                            <button type="submit" class="w-full sm:w-2/4 bg-slate-200 hover:bg-slate-300 dark:bg-gray-950 dark:hover:bg-gray-950/60 py-3 rounded-md">Send Message <i class="far fa-paper-plane ml-2"></i> </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>