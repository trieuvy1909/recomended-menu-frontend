import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  { 
    path: '/',
    name: 'Home', 
    component:  () => import('../components/HomePage.vue'), 
  }, 
  { 
    path: '/login',
    name: 'Login', 
    component: () => import('../components/LoginPage.vue') 
  }, 
  { 
    path: '/plan-list',
    name: 'PlanList', 
    component: () => import('../components/manage/PlanListPage.vue') 
  }, 
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;