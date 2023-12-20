import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'; 
import '@/assets/js/script'; 
// import { IonicVue } from '@ionic/vue';

Vue.config.productionTip = false
// Vue.use(IonicVue);

new Vue({
  render: h => h(App),
}).$mount('#app')