import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';

import './assets/app.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Toast', Toast);
app.directive('tooltip', Tooltip);
app.mount('#app')
