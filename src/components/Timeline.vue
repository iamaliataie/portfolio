<script setup>
import {reactive} from 'vue'
import TimelineCard from './TimelineCard.vue'

const props = defineProps(['resume'])

const resumeList = reactive([
    {
        id: 1,
        title: 'Odoo Developer',
        date: 'Dec 2023 - Present',
        organization: {
            title: 'Netlinks Ltd',
            link: 'https://netlinks.net'
        }
    },
    {
        id: 2,
        title: 'Software Development Intern',
        date: 'July 2023 - Nov 2023',
        organization: {
            title: 'Netlinks Ltd',
            link: 'https://netlinks.net'
        }
    },
    {
        id: 3,
        title: 'Computer Science',
        date: '2019 - 2022',
        organization: {
            title: 'Kateb University',
            link: 'https://kateb.edu.af'
        }
    },
])

</script>

<template>
    <section id="portfolio" class="py-2 bg-slate-100 dark:bg-slate-950">
        <div class="section container py-32">
            <div class="flex justify-center items-center">
                <div>
                    <p class="font-bold text-lg uppercase text-sky-700">Timeline</p>
                    <h1 class="text-4xl sm:text-5xl font-bold mb-16">My Resume</h1>
                </div>
            </div>
            <div class="flex flex-col space-y-10">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <TimelineCard
                    v-for="item in resume"
                    :date=item.duration
                    :title=item.title
                    :organization_title=item.organization_title
                    :organization=item.organization_link
                    />
                </div>
            </div>
        </div>
    </section>
</template>
