<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)
const dropdownOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// Close menus whenever the route changes
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
    dropdownOpen.value = false
  }
)

const browseLinks = [
  { to: '/browse/events', label: 'Event List', icon: '📋' },
  { to: '/browse/events/1', label: 'Event Detail (Sample)', icon: '🎫' },
  { to: '/browse/category', label: 'Category', icon: '🗂️' }
]
</script>

<template>
  <header class="navbar" :class="{ scrolled, open: menuOpen }">
    <div class="nav-inner">
      <router-link to="/" class="logo">
        <span class="logo-mark">G</span>
        Gatherly
      </router-link>

      <button
        class="burger"
        :class="{ active: menuOpen }"
        aria-label="Toggle navigation"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="nav-links" :class="{ show: menuOpen }">
        <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
        <router-link to="/about" class="nav-link" active-class="active">About</router-link>

        <div
          class="dropdown"
          :class="{ open: dropdownOpen }"
          @mouseenter="dropdownOpen = true"
          @mouseleave="dropdownOpen = false"
        >
          <button
            class="nav-link dropdown-toggle"
            :class="{ active: route.path.startsWith('/browse') }"
            :aria-expanded="dropdownOpen"
            @click="dropdownOpen = !dropdownOpen"
          >
            Browse
            <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
          </button>
          <div class="dropdown-menu">
            <router-link
              v-for="link in browseLinks"
              :key="link.to"
              :to="link.to"
              class="dropdown-item"
              exact-active-class="active"
            >
              <span class="item-icon">{{ link.icon }}</span>
              {{ link.label }}
            </router-link>
          </div>
        </div>

        <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
        <router-link to="/dashboard" class="nav-link" active-class="active">Dashboard</router-link>
        <router-link to="/browse/events" class="nav-cta">Find Events</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  background: #1c1948;
  transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
}
.navbar.scrolled {
  background: rgba(28, 25, 72, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 8px 24px rgba(28, 25, 72, 0.18);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 68px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #fff;
  font-weight: 800;
  font-size: 1.35rem;
  text-decoration: none;
  letter-spacing: -0.02em;
}
.logo-mark {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #6644ff, #a48bff);
  font-size: 1.1rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0.9rem;
  border-radius: 10px;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: color 0.2s, background 0.2s;
}
.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}
.nav-link.active {
  color: #fff;
  background: rgba(102, 68, 255, 0.35);
}

.nav-cta {
  margin-left: 0.5rem;
  background: #6644ff;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(102, 68, 255, 0.45);
}

/* Dropdown */
.dropdown {
  position: relative;
}
.chevron {
  transition: transform 0.2s;
}
.dropdown.open .chevron {
  transform: rotate(180deg);
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  min-width: 230px;
  padding: 0.5rem;
  margin-top: 0.4rem;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 18px 40px rgba(28, 25, 72, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, 8px);
  transition: all 0.2s ease;
}
/* invisible bridge so hover isn't lost between toggle & menu */
.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -0.5rem;
  left: 0;
  right: 0;
  height: 0.5rem;
}
.dropdown.open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}
.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.75rem;
  border-radius: 10px;
  color: #1c1948;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  transition: background 0.15s, color 0.15s;
}
.dropdown-item:hover,
.dropdown-item.active {
  background: #efeaff;
  color: #6644ff;
}
.item-icon {
  font-size: 1rem;
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}
.burger span {
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s;
}
.burger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger.active span:nth-child(2) {
  opacity: 0;
}
.burger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile */
@media (max-width: 860px) {
  .burger {
    display: flex;
  }
  .navbar.open {
    background: #1c1948;
  }
  .nav-links {
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    padding: 1rem 1.5rem 1.5rem;
    background: #1c1948;
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.25);
    max-height: calc(100vh - 68px);
    overflow-y: auto;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s ease;
  }
  .nav-links.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  .nav-link {
    width: 100%;
    justify-content: space-between;
    padding: 0.75rem 1rem;
  }
  .dropdown-menu {
    position: static;
    transform: none;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.06);
    margin: 0.25rem 0 0;
    display: none;
    opacity: 1;
    visibility: visible;
  }
  .dropdown.open .dropdown-menu {
    display: block;
    transform: none;
  }
  .dropdown-item {
    color: rgba(255, 255, 255, 0.85);
  }
  .dropdown-item:hover,
  .dropdown-item.active {
    background: rgba(102, 68, 255, 0.35);
    color: #fff;
  }
  .nav-cta {
    margin: 0.5rem 0 0;
    text-align: center;
  }
}
</style>
