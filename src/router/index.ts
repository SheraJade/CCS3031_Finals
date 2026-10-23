import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AboutView from '@/views/AboutView.vue'
import Faculty from '@/views/Faculty.vue'
import NewsView from '@/views/NewsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/faculty', name: 'faculty', component: Faculty },
    { path: '/news', name: 'news', component: NewsView },
    { path: '/contact', name: 'contact', component: ContactView },

    
{
  path: '/programs/cs',
  component: () => import('@/views/CSView.vue')
},
{
  path: '/programs/it',
  component: () => import('@/views/ITView.vue')
},
{
  path: '/programs/dmia',
  component: () => import('@/views/DMIAView.vue')
},
{
  path: '/programs/is',
  component: () => import('@/views/ISView.vue')
}

  ],

  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 140, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
