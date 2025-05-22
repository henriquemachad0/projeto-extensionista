import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('src/views/Home.vue') 
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('src/views/About.vue') 
      },
      {
        path: 'services',
        name: 'services',
        component: () => import('src/views/Services.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('src/views/Contact.vue')
      }
    ]
  },

  // Página de erro para rotas não encontradas
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
