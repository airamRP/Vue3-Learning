import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../views/Counter.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosComposable.vue')
  },
  {
    path: '/ref',
    name: 'Ref',
    component: () => import('../views/Ref.vue')
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import('../views/Todos.vue')
  },
  {
    path: '/provide-inject',
    name: 'provide',
    component: () => import('../views/Provide.vue')
  },
  {
    path: '/state-management',
    name: 'state',
    component: () => import('../views/State.vue')
  },
  {
    path: '/mouse',
    name: 'mouse',
    component: () => import('../views/Mouse.vue')
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: () => import('../views/Fetch.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
