import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'Home'
    },
    {
    path: '/',
    component: () => import('@/layout/AppLayout.vue'),
    children: [
      {
        path: '/2VGame',
        name: 'TwoPlayerGame',
        component: () => import('@/views/TwoPlayerGame.vue')
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/nhi-khelna',
        name: 'NoPlay',
        component: () => import('@/views/NoPlay.vue')
      },
      {
        path: '/Vs-Computer',
        name: 'VsComputer',
        component: () => import('@/views/Computer.vue')
      }
    ]
    }
  ],
});

export default router;
