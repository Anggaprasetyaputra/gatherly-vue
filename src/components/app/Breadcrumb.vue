<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

/**
 * Build the breadcrumb trail from route.matched + route.meta.breadcrumb.
 * e.g. /browse/events/1 -> Home / Browse / Event List / Event Detail
 */
const breadcrumbs = computed(() => {
  const crumbs = route.matched
    .filter((r) => r.meta && r.meta.breadcrumb)
    .map((r) => ({
      label: r.meta.breadcrumb,
      // dynamic segments (":id") -> use the actual current path
      path: r.path.includes(':') ? route.path : r.path || '/'
    }))

  // Detail pages live "under" the list page conceptually
  if (route.name === 'event-detail') {
    crumbs.splice(crumbs.length - 1, 0, { label: 'Event List', path: '/browse/events' })
  }

  // Always start from Home
  if (!crumbs.length || crumbs[0].path !== '/') {
    crumbs.unshift({ label: 'Home', path: '/' })
  }
  return crumbs
})
</script>

<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path + index">
        <span v-if="index > 0" class="separator" aria-hidden="true">/</span>
        <router-link v-if="index < breadcrumbs.length - 1" :to="crumb.path" class="crumb-link">
          <span v-if="index === 0" class="home-icon">🏠</span>
          {{ crumb.label }}
        </router-link>
        <span v-else class="current" aria-current="page">
          <span v-if="index === 0" class="home-icon">🏠</span>
          {{ crumb.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 1.75rem;
  padding: 0.75rem 1.1rem;
  background: #fff;
  border: 1px solid #ebe8f7;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(28, 25, 72, 0.04);
}
ol {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}
li {
  display: flex;
  align-items: center;
}
.crumb-link {
  color: #6644ff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.15rem 0.4rem;
  border-radius: 6px;
  transition: background 0.15s;
}
.crumb-link:hover {
  background: #efeaff;
}
.separator {
  color: #b5b2cc;
  margin: 0 0.35rem;
}
.current {
  color: #1c1948;
  font-weight: 700;
  padding: 0.15rem 0.4rem;
}
.home-icon {
  font-size: 0.85rem;
  margin-right: 0.15rem;
}
</style>
