<script setup>

import Navbar from './Navbar.vue';
import Header from './Header.vue';
import About from './About.vue';
import Jobs from './Jobs.vue'
import Works from './Works.vue';
import Skills from './Skills.vue';
import Contact from './Contact.vue';
import Footer from './Footer.vue';

import { onMounted, ref } from 'vue';
import { supabase } from '../supabase';
const aboutData = ref('')
const worksList = ref([])


const { data: about } = await supabase.from('about').select().single()
const { data: works } = await supabase.from('works').select()

aboutData.value = about.text;
worksList.value = works


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