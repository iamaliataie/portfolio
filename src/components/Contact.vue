<script setup>

import { reactive, ref } from 'vue';
import { supabase } from '../supabase';
import emailjs from '@emailjs/browser'

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const form = ref()
const waiting = ref(false)
const messageReport = ref('')
const success = ref(false)
const props = defineProps(['loading', 'contact'])

const message = reactive({
    name: '',
    phone: '',
    email: '',
    subject: 'new things',
    message: ''
})

const sendMessage = async () => {
    waiting.value = true
    messageReport.value = ''
    if (!message.name || !message.email || !message.message) {
        messageReport.value = 'All fields are required.'
        success.value = false
        waiting.value = false
        return
    }
    const {data, error} = await supabase.from('messages').insert(message)
    if (!error) {
        messageReport.value = 'Message sent. Thank You!'
        success.value = true
        emailjs.sendForm(emailjsServiceId, emailjsTemplateId, form.value, emailjsPublicKey)
            .then((result) => {
                    
                }, (error) => {
                    
            }
        )
        message.name = ''
        message.phone = ''
        message.email = ''
        message.subject = ''
        message.message = ''
    }
    else {
        messageReport.value = "Message not sent. Please try again!"
        success.value = false
    }
    waiting.value = false
}

</script>

<template>
        <section id="contact" class="py-2 bg-sky-700">
            <div class="section container py-32">
                <div class="flex flex-col justify-center items-center">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div class="lg:px-10 flex flex-col space-y-6 text-white">
                            <h1 class="text-4xl sm:text-4xl font-bold text-white">Just Say Hi.</h1>
                            <p class="text-3xl">I'm always open to discuss your project and talk about new things.</p>
                            <div class="text-xl font-semibold">
                                <p>Mail me at:</p>
                                <a href="mailto:hello@ataie.dev" aria-label="hello@ataie.dev">hello@ataie.dev</a>
                            </div>
                        </div>
                        <div class="lg:px-10">
                            <form ref="form" @submit.prevent="sendMessage" class="flex flex-col space-y-2">
                                <input type="text" name="user_name" v-model="message.name" placeholder="Name*" class="text-xl text-white w-full rounded-lg bg-sky-800/50 py-2 px-4 outline-none  placeholder:text-white/50 focus:bg-sky-900">
                                <input type="email" name="user_email" v-model="message.email" placeholder="Email*" class="text-xl text-white w-full rounded-lg bg-sky-800/50 py-2 px-4 outline-none  placeholder:text-white/50 focus:bg-sky-900">
                                <textarea name="message" v-model="message.message" placeholder="Message*" class="text-xl text-white w-full rounded-lg bg-sky-800/50 px-4 py-2 outline-none placeholder:text-white/50 resize-none focus:bg-sky-900" rows="4" ></textarea>
                                <button type="submit" class="px-4 py-2 rounded-md bg-sky-800 sm:w-fit text-white uppercase hover:bg-sky-900 transition duration-200">
                                    {{ waiting ? 'Sending. please wait' : 'Send message' }}
                                </button>
                            </form>
                            <div 
                            v-if="messageReport"
                            class="text-white text-center md:text-start">
                                <span>
                                    <i 
                                    class="fa fa-times"
                                    :class="`fa fa-${success ? 'check':'times'}-circle ${success ? 'text-emerald-800' : 'text-red-800'}`"
                                    ></i>
                                    {{ messageReport }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
