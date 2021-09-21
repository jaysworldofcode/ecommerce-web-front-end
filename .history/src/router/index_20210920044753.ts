import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Order from '../pages/Order.vue';
import Routes from '../enums/route-names';

const routes = [
  {
    path: '/',
    name: Routes.HOME,
    component: Home
  },
  {
    path: '/'+Routes.HOME.toLowerCase(),
    name: Routes.HOME,
    component: Home
  },
  {
    path: '/'+Routes.ORDER.toLowerCase(),
    name: Routes.ORDER,
    component: Order
  },
  {
    path: '/'+Routes.ABOUT.toLowerCase(),
    name: Routes.ABOUT,
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
