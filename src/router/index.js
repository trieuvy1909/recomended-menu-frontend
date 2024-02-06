import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  { path: '/', component:  () => import('../components/LoginPage.vue'), }, 
  { path: '/login', component: () => import('../components/LoginPage.vue') }, 
];

export default new Router({
  routes,
});