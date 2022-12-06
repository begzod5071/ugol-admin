import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/product/:id',
    name: 'product-item',
    component: () => import('../views/Product/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutUs/index.vue')
  },
  // {
  //   path: '/talk-time-report',
  //   name: 'talk-time-report',
  //   component: () => import('../views/talkTimeReport/index.vue')
  // },
]

const router = new VueRouter({
  // do not change (mode)
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router