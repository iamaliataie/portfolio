import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, far, fab)
dom.watch()

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.component("font-awesome-icon", FontAwesomeIcon) 
app.mount('#app')
