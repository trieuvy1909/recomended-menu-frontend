import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'; 
// import '@/assets/js/script'; 
// import { IonicVue } from '@ionic/vue';

Vue.config.productionTip = false
// Vue.use(IonicVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
const preloadImages = [
  '@/assets/images/hero-slider-1.jpg',
  '@/assets/images/hero-slider-2.jpg',
  '@/assets/images/hero-slider-3.jpg'
];

preloadImages.forEach(image => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = image;
  document.head.appendChild(link);
});