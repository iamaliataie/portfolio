<script setup>
import { onMounted, reactive, watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePortfolioStore } from '../stores/portfolio';

const store = usePortfolioStore();
const router = useRouter();
const loading = ref(false)


const credentials = reactive({
    email: '',
    password: ''
})
const handleLogin = async () => {
    loading.value = true;
    await store.handleLogin(credentials);
    loading.value = false;
}

watch(store,() => {
    if (store.isLoggedIn) {
        router.push('/dashboard');
    }
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
                <button type="submit" class="bg-main py-2 px-3 rounded-md text-white focus:outline-none " 
                :disabled="loading"
                >
                    Login
                </button>
            </form>
            <p v-if="store.errorMessage">{{ store.errorMessage }}</p>
            <p v-if="loading">please wait</p>
        </div>
    </div>
</template>