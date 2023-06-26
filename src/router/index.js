import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/about.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import home from "@/views/dashboard/home.vue"
import dashboard from '../views/dashboard/dashboard.vue'
import Tests from "@/views/Tests.vue";
import Testing from "@/views/Testing.vue";
import Users from "@/views/SuperAdmin/Users.vue";
import Learn from "@/views/Learn"
import Progress from "@/views/Progress"
import Tasks from "@/views/Admin/manage/Tasks"
import Overview from "@/views/Admin/manage/Overview"
import project_users from "@/views/Admin/manage/Project_users"

import Project from "@/views/Admin/Project.vue"
import Youtube from "@/views/Users/modules/Youtube.vue"

const routes = [

  {
    path: '/tests',
    name: 'test',
    component: Tests,
  },
  {
    path: '/testing',
    name: 'testing',
    component: Testing,
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
    component: dashboard,
    children: [
      {
        path: '',
        name: 'home',
        component: home,
      },
      {
        path: 'overview/:id',
        name: 'overview',
        component: Overview,
      },
      {
        path: 'tasks/:id',
        name: 'tasks',
        component: Tasks,
      },
      {
        path: 'project_users/:id',
        name: 'project_users',
        component: project_users,
      },
      {
        path: 'users',
        name: 'users',
        component: Users,
      },
      {
        path: '/projects',
        name: 'projects',
        component: Project,

      }

    ]
  }
  ,
  {
    path: '/youtube/:id',
    name: 'youtube',
    component: Youtube,

  },

    {
    path: '/about',
    name: 'about',
    component: About
  }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
