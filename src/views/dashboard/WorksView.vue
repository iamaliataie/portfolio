<script setup>

</script>
<template>
    <div class="py-12">
        <div class="container">
            <div class="mb-6 flex items-center justify-between">
                <h1 class="text-4xl font-bold">Works</h1>
                <RouterLink :to="{name: 'new-work'}" class="flex space-x-2 items-center bg-main px-3 py-2 rounded-md w-fit text-white">
                    <i class="fa fa-add"></i>
                    <span>New</span>
                </RouterLink>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div class="flex flex-col space-y-4 border bg-white rounded-md p-4">
                    <img src="../../assets/ataie.jpg" alt="">
                    <p>Sample Project</p>
                </div>
                <div class="flex flex-col space-y-4 border bg-white rounded-md p-4">
                    <img src="../../assets/ataie.jpg" alt="">
                    <p>Sample Project</p>
                </div>
                <div class="flex flex-col space-y-4 border bg-white rounded-md p-4">
                    <img src="../../assets/ataie.jpg" alt="">
                    <p>Sample Project</p>
                </div>
                <div class="flex flex-col space-y-4 border bg-white rounded-md p-4">
                    <img src="../../assets/ataie.jpg" alt="">
                    <p>Sample Project</p>
                </div>
                <div class="flex flex-col space-y-4 border bg-white rounded-md p-4">
                    <img src="../../assets/ataie.jpg" alt="">
                    <p>Sample Project</p>
                </div>
                <div class="flex flex-col space-y-4 border bg-white rounded-md p-4">
                    <img src="../../assets/ataie.jpg" alt="">
                    <p>Sample Project</p>
                </div>
            </div>
        </div>
    </div>
</template>