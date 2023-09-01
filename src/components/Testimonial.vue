<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../style.css';

// import required modules
import { Pagination, Autoplay } from 'swiper';

const modules = [Pagination, Autoplay]

</script>

<template>
    <div class=" text-gray-900 dark:text-zinc-50 py-2">
        <div class="container border-b-2 dark:border-gray-900 xl:max-w-[1124px] w-11/12 px-0 py-16 space-y-8">
            <header class="flex flex-col text-center">
                <h6 class="uppercase text-main-red font-bold">Testimonials</h6>
                <h1 class="text-[30px] md:text-[40px] lg:text-[50px] font-bold">What My Colleagues Say</h1>
            </header>
            <swiper 
        :slidesPerView="1"
        :spaceBetween="10"
        :autoplay="{
            delay: 2500,
            disableOnInteraction:false,
            pauseOnMouseEnter:true
        }"
        :pagination="{
            clickable: true,
        }" 
        :breakpoints="{
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            '1024': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }" 
        :modules="modules" 
        class="mySwiper">
            <swiper-slide>
                <div class="flex flex-col items-center sm:items-start gap-6 p-6 bg-slate-50 rounded-md shadow-md text-slate-700 dark:bg-gray-900 dark:text-slate-300 dark:shadow-black text-sm">
                    <p class="text-center sm:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas distinctio ipsum laudantium suscipit quisquam mollitia dolores iste ex nesciunt?Quidem quas distinctio ipsum laudantium suscipit quisquam mollitia dolores iste ex nesciunt?Quidem quas distinctio ipsum laudantium suscipit quisquam mollitia dolores iste ex nesciunt?</p>
                    <div class="flex flex-row space-x-2 items-center">
                        <img src="../../assets/self.jpg" alt="" class="w-16 rounded-full">
                        <div class="">
                            <p class="text-gray-950 font-bold text-lg md:text-sm lg:text-lg dark:text-slate-100">Ali Ahmad Ataie</p>
                            <span>Web Developer</span>
                            <a href="https://github.com/iamaliataie" class="text-main-red"><i class="fa fa-external-link text-xs ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="h-full">
                <div class="flex flex-col items-center sm:items-start gap-6 p-6 bg-slate-50 rounded-md shadow-md text-slate-700 dark:bg-gray-900 dark:text-slate-300 dark:shadow-black text-sm">
                    <p class="text-center sm:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas distinctio ipsum laudantium suscipit quisquam mollitia dolores iste ex nesciunt?</p>
                    <div class="flex flex-row space-x-2 items-center">
                        <img src="../../assets/self.jpg" alt="" class="w-16 rounded-full">
                        <div class="">
                            <p class="text-gray-950 font-bold text-lg md:text-sm lg:text-lg dark:text-slate-100">Ali Ahmad Ataie</p>
                            <span>Web Developer</span>
                            <a href="https://github.com/iamaliataie" class="text-main-red"><i class="fa fa-external-link text-xs ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center sm:items-start gap-6 p-6 bg-slate-50 rounded-md shadow-md text-slate-700 dark:bg-gray-900 dark:text-slate-300 dark:shadow-black text-sm">
                    <p class="text-center sm:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas distinctio ipsum laudantium suscipit quisquam mollitia dolores iste ex nesciunt?</p>
                    <div class="flex flex-row space-x-2 items-center">
                        <img src="../../assets/self.jpg" alt="" class="w-16 rounded-full">
                        <div class="">
                            <p class="text-gray-950 font-bold text-lg md:text-sm lg:text-lg dark:text-slate-100">Ali Ahmad Ataie</p>
                            <span>Web Developer</span>
                            <a href="https://github.com/iamaliataie" class="text-main-red"><i class="fa fa-external-link text-xs ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center sm:items-start gap-6 p-6 bg-slate-50 rounded-md shadow-md text-slate-700 dark:bg-gray-900 dark:text-slate-300 dark:shadow-black text-sm">
                    <p class="text-center sm:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas distinctio ipsum laudantium suscipit quisquam mollitia dolores iste ex nesciunt?</p>
                    <div class="flex flex-row space-x-2 items-center">
                        <img src="../../assets/self.jpg" alt="" class="w-16 rounded-full">
                        <div class="">
                            <p class="text-gray-950 font-bold text-lg md:text-sm lg:text-lg dark:text-slate-100">Ali Ahmad Ataie</p>
                            <span>Web Developer</span>
                            <a href="https://github.com/iamaliataie" class="text-main-red"><i class="fa fa-external-link text-xs ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        </div>
    </div>
</template>
