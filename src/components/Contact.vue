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
const props = defineProps(['contact'])

const message = reactive({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
})

const sendMessage = async () => {
    waiting.value = true
    messageReport.value = ''
    if (!message.name || !message.email || !message.subject || !message.message) {
        messageReport.value = 'name, email, subject and message fields are required.'
        success.value = false
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
    <section id="contact" class="py-2">
        <div class="section container border-b-2 dark:border-gray-900 xl:max-w-[1124px] w-11/12 px-0 py-20 space-y-8">
            <header class="flex flex-col text-center">
                <h6 class="uppercase text-main font-bold">Contact</h6>
                <h1 class="text-[30px] md:text-[40px] lg:text-[50px] font-bold">Contact With Me</h1>
            </header>
            <div class="flex flex-col md:flex-row items-left justify-left gap-8">
                <div class="md:w-4/12 flex flex-col sm:grid sm:grid-cols-2 md:flex gap-4">
                    <div class="flex justify-center sm:flex-col items-center gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-7 rounded-lg">
                        <i class="fa fa-map text-main text-3xl"></i>
                        <span class="sm:text-sm">{{ contact.address }}</span>
                    </div>
                    <div class="flex justify-center sm:flex-col items-center gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-7 rounded-lg">
                        <i class="fa fa-phone text-main text-3xl"></i>
                        <a :href="`tel:${String(contact.phone).replaceAll('-','')}`" class="sm:text-sm">{{ contact.phone }}</a>
                    </div>
                    <div class="flex justify-center sm:flex-col items-center gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-7 rounded-lg">
                        <i class="fa fa-envelope text-main text-3xl"></i>
                        <a :href="`mailto:${contact.email}`" class="sm:text-sm">{{ contact.email }}</a>
                    </div>
                    <div class="flex justify-center sm:flex-col items-center gap-4 shadow-md bg-slate-50 shadow-slate-300 dark:shadow-black dark:bg-slate-900 py-7 rounded-lg">
                        <i class="fa fa-check-circle text-main text-3xl"></i>
                        <span class="sm:text-sm">Freelance Available</span>
                    </div>
                </div>
                <div class="md:w-8/12 rounded-lg bg-slate-50 dark:bg-gray-900 dark:shadow-black shadow-lg p-6 sm:p-12 md:p-6 lg:p-12">
                    <form ref="form" @submit.prevent="sendMessage" class="space-y-6 sm:space-y-8">
                        <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-4 lg:gap-8">
                            <input
                            v-model="message.name"
                            name="user_name"
                            type="text" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none" placeholder="Enter your name" required>
                            <input
                            v-model="message.phone"
                            name="user_phone"
                            type="text" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none" placeholder="Enter your phone (optional)">
                        </div>
                        <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-4 lg:gap-8">
                            <input
                            v-model="message.email"
                            name="user_email"
                            type="email" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none" placeholder="Enter your email" required>
                            <input
                            v-model="message.subject"
                            name="subject"
                            type="text" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none" placeholder="Enter your subject" required>
                        </div>
                        <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-4 lg:gap-8">
                            <textarea
                            v-model="message.message"
                            name="message"
                            cols="30" rows="7" class="py-3 px-5 rounded-md bg-slate-200 dark:bg-gray-950 w-full focus:outline-none resize-none" placeholder="Type your message" required></textarea>
                        </div>
                        <div class="flex justify-center">
                            <button
                            type="submit"
                            class="w-full sm:w-2/4 bg-slate-200 hover:bg-slate-300 dark:bg-gray-950 dark:hover:bg-gray-950/60 py-3 rounded-md"
                            >
                                <span v-if="!waiting">Send Message <i class="far fa-paper-plane ml-2"></i></span>
                                <span v-else>Sending message...</span>
                            </button>
                        </div>
                    </form>
                    <div
                    v-if="messageReport"
                    class="text-center mt-2 space-x-2">
                        <i v-if="!success" class="fa fa-times-circle" :class="{'text-red-500': !success}"></i>
                        <i v-else class="fa fa-check-circle" :class="{'text-green-500': success}"></i>
                        <span>{{ messageReport }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>