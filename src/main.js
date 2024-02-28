// src/main.js

import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/css/style.css'; 
import '@/assets/js/script';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import LoadingComponent from '@/components/base/LoadingComponent.vue';

Vue.component('LoadingComponent', LoadingComponent);
import axios from 'axios';
axios.defaults.baseURL = 'https://recomended-menu-backend.onrender.com/api';

Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.use(LoadingComponent);
Vue.use(VueSweetalert2);

new Vue({
  router, // Connect router to Vue instance
  render: (h) => h(App),
}).$mount('#app');