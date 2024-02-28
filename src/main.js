// src/main.js

import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/css/style.css'; 
import '@/assets/js/script';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import LoadingComponent from '@/components/base/LoadingComponent.vue';
import ReLoadComponent  from '@/components/base/ReLoadComponent.vue';
Vue.component('LoadingComponent', LoadingComponent);
Vue.component('ReLoadComponent', ReLoadComponent);
import axios from 'axios';
axios.defaults.baseURL = 'https://recomended-menu-backend.onrender.com/api';

Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.use(LoadingComponent);
Vue.use(VueSweetalert2);
Vue.use(ElementUI);

new Vue({
  router, // Connect router to Vue instance
  render: (h) => h(App),
}).$mount('#app');