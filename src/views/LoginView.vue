<script setup>
import { reactive, onMounted } from 'vue';
import { supabase } from '../supabase';

const credentials = reactive({
    email: '',
    password: ''
})
const handleLogin = async () => {
    const response = await supabase.auth.signInWithPassword(credentials);
    console.log(response);
}

onMounted( async () => {
    // const { data: about } = await supabase.from('about').select().single();
    // console.log(about);
})

</script>
<template>
    <div class="flex items-center justify-center h-screen">
        <div class="flex flex-col items-center space-y-6">
            <div class="flex flex-row space-x-2 items-center">
                <img src="../assets/favicon.svg" class="w-10" alt="">
                <div class="flex flex-col -space-y-3">
                    <span class="text-[28px] md:text-[29px] font-semibold text-main">Ataie</span>
                    <span class="text-sm font-semibold">Ali Ahmad</span>
                </div>
            </div>
            <form @submit.prevent="handleLogin" class="flex flex-col items-center space-y-4">
                <input type="email" v-model="credentials.email" placeholder="email" class="p-3 rounded-md focus:outline-none">
                <input type="password" v-model="credentials.password" placeholder="password" class="p-3 rounded-md focus:outline-none">
                <button type="submit" class="bg-main py-2 px-3 rounded-md text-white focus:outline-none dark:bg-red-500">Login</button>
            </form>
        </div>
    </div>
</template>