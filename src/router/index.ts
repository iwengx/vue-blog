import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import HomePage from '../view/home.vue';

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage,
   },
   {
      path: '/demo/:chapters+',
      name: 'home-md',
      component: HomePage,
   },
];

export const router = createRouter({
   history: createWebHashHistory(),
   routes,
});
