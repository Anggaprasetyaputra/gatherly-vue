import { createRouter, createWebHistory } from 'vue-router'

/*
 * MODUL 2 — dua kerangka tata letak (layout):
 *  1. AppLayout (layouts/App.vue)          → Navbar + Breadcrumb + Footer (halaman publik)
 *  2. DashboardLayout (layouts/DashboardLayout.vue) → Rail & Pane System (halaman penyelenggara)
 * Setiap layout memiliki <router-view> sendiri sehingga halaman anak dirender di dalamnya.
 */
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/App.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { breadcrumb: 'Home', title: 'Home' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: { breadcrumb: 'About', title: 'About' }
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
        meta: { breadcrumb: 'Contact', title: 'Contact' }
      },
      {
        // Parent route — renders children through its own <router-view>
        path: 'browse',
        component: () => import('@/views/Browse.vue'),
        meta: { breadcrumb: 'Browse' },
        redirect: '/browse/events',
        children: [
          {
            path: 'events',
            name: 'events',
            component: () => import('@/views/EventList.vue'),
            meta: { breadcrumb: 'Event List', title: 'Event List' }
          },
          {
            path: 'events/:id',
            name: 'event-detail',
            component: () => import('@/views/EventDetail.vue'),
            meta: { breadcrumb: 'Event Detail', title: 'Event Detail' }
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/Category.vue'),
            meta: { breadcrumb: 'Category', title: 'Category' }
          }
        ]
      }
    ]
  },
  {
    // RAIL & PANE SYSTEM — ruang kerja penyelenggara (organizer)
    path: '/dashboard',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: { title: 'Dashboard' }
      },
      {
        path: 'events',
        name: 'dashboard-events',
        component: () => import('@/views/dashboard/MyEvents.vue'),
        meta: { title: 'My Events' }
      },
      {
        path: 'attendees',
        name: 'dashboard-attendees',
        component: () => import('@/views/dashboard/Attendees.vue'),
        meta: { title: 'Attendees' }
      },
      {
        path: 'check-in',
        name: 'dashboard-checkin',
        component: () => import('@/views/dashboard/CheckIn.vue'),
        meta: { title: 'QR Check-in' }
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

// Judul tab browser mengikuti halaman aktif
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · Gatherly` : 'Gatherly - Connect, Discover, and Experience'
})

export default router
