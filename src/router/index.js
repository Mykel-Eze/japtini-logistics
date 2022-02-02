import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Partner from '../views/Partner.vue'
import Contact from '../views/Contact.vue'

import Error404 from '../views/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/partner',
    name: 'Partner',
    component: Partner
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  { path: '/:pathMatch(.*)*', beforeEnter: (to, from, next) => { next('/error') } },
  {
    path: '/error',
    name: 'Error404',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
