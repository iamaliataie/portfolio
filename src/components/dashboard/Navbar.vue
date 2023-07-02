<script setup>
import { usePortfolioStore } from '../../stores/portfolio';

const store = usePortfolioStore()

const logout = () => {
    store.handleLogout();
}

</script>

<template>
    <div class="flex justify-center items-center bg-main py-8">
        <div class="flex items-center space-x-4 font-bold">
            <RouterLink :to="{name: 'works'}">Works</RouterLink>
            <span>About</span>
            <span>Contact</span>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>