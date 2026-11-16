# 🎉 Gatherly — Vue 3 SPA

A modern event-discovery Single Page Application built with **Vue 3 (Composition API, `<script setup>`)**, **Vite**, and **Vue Router 4**.

## ✨ Features
- Persistent global layout (Navbar + Breadcrumb) — only the page content changes
- Nested routes: `/browse` parent with `<router-view>` for its children
- Dynamic route `/browse/events/:id`
- Dynamic breadcrumb based on `route.meta.breadcrumb`
- Responsive navbar with dropdown, mobile burger menu & blur-on-scroll effect
- Fully scoped CSS, mobile-friendly design

## 🗺️ Routes
| Path | View | Breadcrumb |
|---|---|---|
| `/` | `Home.vue` | Home |
| `/about` | `About.vue` | About |
| `/contact` | `Contact.vue` | Contact |
| `/browse` → redirects to `/browse/events` | `Browse.vue` (parent) | Browse |
| `/browse/events` | `EventList.vue` | Event List |
| `/browse/events/:id` | `EventDetail.vue` | Event Detail |
| `/browse/category` | `Category.vue` | Category |

## 📁 Structure
```
src/
├── assets/main.css
├── components/app/
│   ├── Breadcrumb.vue
│   └── Navbar.vue
├── data/events.js
├── layouts/App.vue
├── router/index.js
├── views/
│   ├── About.vue  Browse.vue  Category.vue  Contact.vue
│   ├── EventDetail.vue  EventList.vue  Home.vue
├── App.vue
└── main.js
```

## 🚀 Getting Started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
```
