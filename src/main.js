import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatePicker from 'vue3-datepicker';

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);
app.use(router);

app.mount('#app');
