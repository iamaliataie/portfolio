<template>
    <section id="home" class="pb-3">
        <div class="relative section container xl:max-w-7xl min-h-screen flex flex-col items-center justify-center gap-10 pt-20 md:pt-0">
            <div class="flex flex-col-reverse md:flex-row gap-6 items-center justify-between w-full">
                <div class="text-center md:text-left">
                    <span class="text-xl">Hello, I'm</span>
                    <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold">Ali Ahmad <span class="text-main">Ataie</span></h1>
                    <h2 class="text-2xl sm:text-3xl lowercase">a web developer</h2>
                    <div class="flex flex-row gap-4 items-center justify-center md:justify-start mt-8 md:mt-4">
                        <a href="#contact" class="text-sm px-3 py-2 rounded-md bg-main text-white">Hire me</a>
                        <a href="#portfolio" class="text-sm px-3 py-2 rounded-md bg-main text-white">View my portfolio</a>
                    </div>
              </div>
              <div class="hidden md:flex w-full h-60 sm:w-96 md:h-full md:w-2/6 lg:w-2/6  p-2 md:p-0">
                <img src="../assets/ataie.jpg" alt="ataie" class="w-full h-full object-cover rounded-md">
              </div>
            </div>
            <div class="md:absolute bottom-6 left-0 flex flex-col space-y-2 md:flex-row items-center justify-between container">
              <div class="flex flex-row items-center gap-4 text-2xl">
                <a href="https://github.com/iamaliataie" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://linkedin.com/in/iamaliataie" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/ataie.dev" target="_blank"><i class="fab fa-instagram"></i></a>
              </div>
              <a href="mailto:hello@ataie.dev" class="text-lg">hello@ataie.dev</a>
            </div>
        </div>
    </section>
</template>
