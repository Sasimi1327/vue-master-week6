import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'home',
        name: '前台首頁',
        component: () => import('../views/frontend/HomeView.vue'),
      },
      {
        path: 'about',
        name: '前台關於我',
        component: () => import('../views/frontend/AboutView.vue'),
      },
      {
        path: 'products',
        name: '前台產品列表',
        component: () => import('../views/frontend/ProductsList.vue'),
      },
      {
        path: 'checkout',
        name: '前台結帳頁',
        component: () => import('../views/frontend/CheckoutView.vue'),
      },
      {
        path: 'orders',
        name: '前台交易確認頁',
        component: () => import('../views/frontend/OrderView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/frontend/LoginView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: '後台產品列表',
        component: () => import('../views/backend/AdminProductsList.vue'),
      },
      {
        path: 'orders',
        name: '後台訂單列表',
        component: () => import('../views/backend/AdminOrdersView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
