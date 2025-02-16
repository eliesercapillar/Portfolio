import { createApp } from 'vue'
import './css/tailwind.css'
import App from './App.vue'
// import PrimeVue from 'primevue/config'

const app = createApp(App);

// app.use(PrimeVue, {
//     theme: 'none'
// })

app.mount('#app');
