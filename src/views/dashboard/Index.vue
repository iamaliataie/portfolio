<script setup>
import { watch, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { usePortfolioStore } from '../../stores/portfolio'
import Navbar from '../../components/dashboard/Navbar.vue';

const store = usePortfolioStore();
const router = useRouter();

watch(store, () => {
    if (!store.isLoggedIn) {
        router.push('/login')
    }
})

</script>

<template>
    <Navbar />
    <div class="container">
        <RouterView />
    </div>
</template>