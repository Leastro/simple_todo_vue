import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatePicker from 'vue3-datepicker';
//import axios from 'axios';

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);
app.use(router);

//api호출을 위한 axios추가 + 전역 선언
//app.use(axios);
//app.config.globalProperties.axios = axios;

app.mount('#app');
