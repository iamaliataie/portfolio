<script setup>
import { ref } from 'vue';

const imageUrl = ref(null)
const showImage = (el) => {
    const im = el.target.files[0]
    if (im) {
        imageUrl.value = URL.createObjectURL(im)
        console.log(im);
        console.log(imageUrl);
    } else {
        imageUrl.value = null
    }
}
</script>
<template>
    <div class="py-12">
            <div class="container">
                <div class="mb-6 flex items-center justify-between">
                    <h1 class="text-4xl font-bold">New Work</h1>
                </div>
                <form class="flex flex-col-reverse md:flex-row gap-6">
                    <div class="md:w-1/3 flex items-center justify-center border shadow-md">
                        <p v-if="imageUrl == null">Image display here</p>
                        <img v-else :src="imageUrl" alt="" class="w-full h-full" placeholder="image display here">
                    </div>
                    <div class="bg-white w-full flex flex-col gap-4 p-2">
                        <div>
                            <textarea cols="30" rows="5" 
                            class="w-full resize-none rounded-md p-4 focus:outline-none bg-gray-200"
                            placeholder="description"
                            ></textarea>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Github link" class="rounded-md p-4 focus:outline-none bg-gray-200">
                            <input type="text" placeholder="Demo link" class="rounded-md p-4 focus:outline-none bg-gray-200">
                        </div>
                        <div class="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
                            <input type="file" @change="showImage">
                            <button type="submit" class="bg-main px-3 py-2 rounded-md text-white">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
</template>