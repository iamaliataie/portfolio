<script setup>
import { onBeforeMount } from 'vue';
import { usePortfolioStore } from './stores/portfolio';
const store = usePortfolioStore();
onBeforeMount(async () => {
  await store.getUser();
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style>
</style>
