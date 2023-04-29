<script setup>
import {onMounted, ref} from 'vue';
import { supabase } from './supabase';

import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Jobs from './components/Jobs.vue'
import Works from './components/Works.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const aboutData = ref('')
const worksList = ref([])
const loading = ref(true)


const fetchData = async () => {
  const { data: about } = await supabase.from('about').select().single()
  const { data: works } = await supabase.from('works').select()

  aboutData.value = about.text;
  worksList.value = works
}

onMounted(() => {
  fetchData();
})

</script>

<template>
  <div>
    <Navbar />
    <Header />
    <About :about="aboutData"/>
    <Jobs />
    <Works :works="worksList"/>
    <Skills />
    <Contact />
    <Footer />  
  </div>
</template>

<style scoped>
</style>
