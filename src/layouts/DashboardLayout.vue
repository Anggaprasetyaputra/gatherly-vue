<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const railOpen = ref(false)

const pageTitle = computed(() => route.meta?.title || 'Dashboard')

const navItems = [
  { to: '/dashboard', label: 'Overview', exact: true },
  { to: '/dashboard/events', label: 'My Events' },
  { to: '/dashboard/attendees', label: 'Attendees' },
  { to: '/dashboard/check-in', label: 'QR Check-in' }
]
</script>

<template>
  <!-- RAIL & PANE SYSTEM:
       Kerangka khusus produktivitas/pengelolaan aplikasi.
       Tinggi dibatasi 100vh agar Rail kiri tetap terkunci saat Pane kanan di-scroll. -->
  <div class="dashboard-layout">
    <!-- RAIL: Navigasi samping yang posisinya terkunci (static/fixed) -->
    <aside class="dashboard-rail" :class="{ open: railOpen }">
      <div class="rail-brand">
        <router-link to="/">Gatherly Organizer</router-link>
        <button
          type="button"
          class="rail-close"
          aria-label="Close sidebar"
          @click="railOpen = false"
        >
          &times;
        </button>
      </div>
      <nav class="rail-nav" aria-label="Organizer navigation">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rail-link"
          :exact-active-class="item.exact ? 'active' : ''"
          :active-class="item.exact ? '' : 'active'"
          @click="railOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>
      <div class="rail-footer">
        <router-link to="/" class="rail-link">&larr; Back to Public</router-link>
      </div>
    </aside>

    <!-- PANE: Area utama dinamis tempat konten berubah dan dapat digulir secara mandiri -->
    <main class="dashboard-pane">
      <header class="pane-header">
        <div class="header-left">
          <button
            type="button"
            class="rail-toggle"
            aria-label="Open sidebar"
            @click="railOpen = true"
          >
            &#9776;
          </button>
          <h1>{{ pageTitle }}</h1>
        </div>
        <div class="user-profile">
          <span class="avatar">A</span>
          <span>Admin</span>
        </div>
      </header>
      <div class="pane-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Full-screen app layout (khas dashboard).
   Tinggi dibatasi 100vh agar bagian rail tidak ikut tergulir ke atas saat pane di-scroll. */
.dashboard-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bg-gray);
}

/* RAIL STYLES */
.dashboard-rail {
  width: 260px;
  flex-shrink: 0;
  background-color: #1c1948; /* Kontras gelap membedakan area nav dan konten */
  color: #ffffff;
  display: flex;
  flex-direction: column;
}

.rail-brand {
  padding: var(--space-6);
  font-size: 1.15rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rail-brand a {
  color: #ffffff;
  text-decoration: none;
}

.rail-close {
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
}

.rail-nav {
  flex: 1;
  padding: var(--space-6) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.rail-link {
  padding: var(--space-3) var(--space-6);
  color: #a0a0b0;
  text-decoration: none;
  font-weight: 500;
  border-left: 4px solid transparent;
  transition: background 0.2s, color 0.2s;
}

.rail-link:hover,
.rail-link.active {
  background-color: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  border-left-color: var(--primary);
}

.rail-footer {
  padding: var(--space-4) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.rail-footer .rail-link {
  display: block;
}

/* PANE STYLES */
.dashboard-pane {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow-y: auto; /* Scroll khusus untuk area ini saja */
}

.pane-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  padding: var(--space-4) var(--space-8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.rail-toggle {
  display: none;
  background: var(--bg-gray);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: var(--space-1) var(--space-3);
  font-size: 1.15rem;
  cursor: pointer;
}

.pane-header h1 {
  font-size: 1.45rem;
  margin: 0;
  color: var(--text-main);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 600;
  color: var(--text-main);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary);
  color: #ffffff;
  display: grid;
  place-items: center;
  font-size: 0.9rem;
}

.pane-content {
  padding: var(--space-8);
}

@media (max-width: 860px) {
  .dashboard-rail {
    position: fixed;
    inset: 0 auto 0 0;
    z-index: 50;
    transform: translateX(-100%);
    transition: transform 0.25s ease;
  }
  .dashboard-rail.open {
    transform: translateX(0);
  }
  .rail-close,
  .rail-toggle {
    display: inline-block;
  }
  .pane-header {
    padding: var(--space-4);
  }
  .pane-content {
    padding: var(--space-4);
  }
}
</style>
