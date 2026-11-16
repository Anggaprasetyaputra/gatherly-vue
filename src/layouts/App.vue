<script setup>
import Navbar from '@/components/app/Navbar.vue'
import Breadcrumb from '@/components/app/Breadcrumb.vue'
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <Breadcrumb />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} <strong>Gatherly</strong>. Built with Vue 3 &amp; Vue Router.</p>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
  /* MARGIN SYSTEM: konten dibatasi lebar maksimum & diberi jarak samping konsisten */
  max-width: var(--container-max);
  margin: 0 auto;
  /* leave room for the fixed navbar */
  padding: calc(var(--navbar-height) + var(--space-8)) var(--space-6) var(--space-12);
}

.footer {
  background: #1c1948;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;
}
.footer p {
  margin: 0;
}
.footer strong {
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .main-content {
    padding: 84px 1rem 2rem;
  }
}
</style>
