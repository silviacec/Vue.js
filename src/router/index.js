import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Exercise1 from '@/views/exo-1/Exercise1.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/exo-1',
    name: 'Exercise1',
    component: Exercise1,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
