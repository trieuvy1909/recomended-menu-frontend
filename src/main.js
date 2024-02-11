// src/main.js

import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/css/style.css'; 
import '@/assets/js/script'; 

Vue.config.productionTip = false;

new Vue({
  router, // Connect router to Vue instance
  render: (h) => h(App),
}).$mount('#app');