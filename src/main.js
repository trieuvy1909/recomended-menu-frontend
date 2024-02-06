// src/main.js

import Vue from 'vue';
import App from './App.vue';
import router from './router/';

import '@/assets/css/style.css'; 
import '@/assets/js/script'; 

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});