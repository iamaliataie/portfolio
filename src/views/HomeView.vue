<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../supabase';

import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Works from '../components/Works.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

const aboutData = ref({})
const worksList = ref([])
const contactData = ref({})

const fetchData = async () => {
    const { data: about } = await supabase.from('about').select().single()
    const { data: works } = await supabase.from('works').select()
    const { data: contact } = await supabase.from('contact').select().single()

    aboutData.value = about;
    worksList.value = works;
    contactData.value = contact;

}

onMounted(() => {
    let navbarScript = document.createElement('script');
    navbarScript.setAttribute('src', '/src/custom.js');
    console.log(navbarScript);
    document.head.appendChild(navbarScript);
    fetchData();
})

</script>

<template>
    <div>
        <Navbar />
        <Header />
        <About :about="aboutData"/>
        <Works :works="worksList"/>
        <Skills />
        <Contact :contact="contactData"/>
        <Footer />  
    </div>
</template>