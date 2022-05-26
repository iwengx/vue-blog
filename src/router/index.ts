import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../view/home.vue';

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
         {
            path: '/',
            name: 'home-page',
            component: () => import('../components/right-content.vue'),
         },
      ],
   },
   {
      path: '/demo',
      name: 'home-md',
      component: HomePage,
      children: [
         {
            path: '/:chapters+',
            name: 'md-page',
            component: () => import('../components/right-content.vue'),
         },
      ],
   },
   {
      path: '/local',
      name: 'local-page',
      component: HomePage,
      children: [
         {
            path: 'git',
            name: 'git',
            component: () => import('../articles/git.vue'),
         },
      ],
   },
   {
      path: '/vue',
      name: 'vue-page',
      component: HomePage,
      children: [
         {
            path: 'for-key',
            name: 'forKey',
            component: () => import('../articles/vue/v-for-key.vue'),
         },
      ],
   },
];

export const router = createRouter({
   history: createWebHistory(),
   routes,
});
