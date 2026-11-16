<script setup>
// Root component: hanya menampilkan layout yang sesuai dengan route aktif.
// - Halaman publik  → layouts/App.vue (Navbar + Breadcrumb + Footer)
// - Halaman /dashboard → layouts/DashboardLayout.vue (Rail & Pane System)
</script>

<template>
  <router-view />
</template>
