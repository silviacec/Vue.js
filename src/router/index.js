import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Exercise1 from '@/views/exo-1/Exercise1.vue';
import Exercise2 from '@/views/exo-2/Exercise2.vue';
import Exercise3 from '@/views/exo-3/Exercise3.vue';
// import Exercise4 from '@/views/exo-4/Exercise4.vue';
// import Exercise5 from '@/views/exo-5/Exercise5.vue';
// import Exercise6 from '@/views/exo-6/Exercise6.vue';

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
  {
    path: '/exo-2',
    name: 'Exercise2',
    component: Exercise2,
  },
  {
    path: '/exo-3',
    name: 'Exercise3',
    component: Exercise3,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
