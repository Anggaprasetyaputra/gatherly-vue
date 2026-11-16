import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { breadcrumb: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: { breadcrumb: 'About' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: { breadcrumb: 'Contact' }
  },
  {
    // Parent route – renders children through its own <router-view>
    path: '/browse',
    component: () => import('@/views/Browse.vue'),
    meta: { breadcrumb: 'Browse' },
    redirect: '/browse/events',
    children: [
      {
        path: 'events',
        name: 'events',
        component: () => import('@/views/EventList.vue'),
        meta: { breadcrumb: 'Event List' }
      },
      {
        path: 'events/:id',
        name: 'event-detail',
        component: () => import('@/views/EventDetail.vue'),
        meta: { breadcrumb: 'Event Detail' }
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/Category.vue'),
        meta: { breadcrumb: 'Category' }
      }
    ]
  },
  // Fallback: unknown URLs go back home
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
