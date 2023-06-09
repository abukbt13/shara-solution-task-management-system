import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import '@fortawesome/fontawesome-free/css/all.css'

import dashboard from '../views/dashboard/dashboard.vue'
import Tests from "@/views/Tests.vue";
const routes = [

  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/tests',
    name: 'test',
    component: Tests
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
    {
    path: '/',
    name: 'dashboard',
    component: dashboard
  }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
