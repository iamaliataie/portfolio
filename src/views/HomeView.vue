<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../supabase';

import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Works from '../components/Works.vue';
import Timeline from '../components/Timeline.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

const aboutData = ref({})
const worksList = ref([])
const resumeList = ref([])
const contactData = ref({})
const loading = ref(false)

const fetchData = async () => {
    loading.value = true;

    const { data: about } = await supabase.from('about').select().single()
    const { data: works } = await supabase.from('works').select().order('index')
    const { data: resume } = await supabase.from('resume').select().order('id', { ascending: false })
    const { data: contact } = await supabase.from('contact').select().single()

    aboutData.value = about;
    worksList.value = works;
    resumeList.value = resume;
    contactData.value = contact;

    console.log(resume);
    console.log(resumeList.value);

    loading.value = false;

}

onMounted(() => {
    // let navbarScript = document.createElement('script');
    // navbarScript.setAttribute('src', 'custom.js');
    // document.head.appendChild(navbarScript);
    fetchData();
})

</script>

<template>
    <div>
        <Navbar />
        <Header />
        <!-- <About :about="aboutData"/> -->
        <Works :works="worksList" :loading="loading"/>
        <Timeline :resume="resumeList"/>
        <Skills />
        <Contact :contact="contactData" :loading="loading"/>
        <Footer />  
    </div>
</template>
