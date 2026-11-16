<script setup>
const tabs = [
  { to: '/browse/events', label: '📋 Event List' },
  { to: '/browse/category', label: '🗂️ Category' }
]
</script>

<template>
  <div class="browse">
    <header class="browse-header">
      <div>
        <h1>Browse</h1>
        <p>Explore upcoming events and find something that sparks your interest.</p>
      </div>
      <nav class="tabs">
        <router-link v-for="t in tabs" :key="t.to" :to="t.to" class="tab" active-class="active">
          {{ t.label }}
        </router-link>
      </nav>
    </header>

    <!-- Child routes (EventList, EventDetail, Category) render here -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.browse-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 22px;
  background: linear-gradient(120deg, #1c1948 0%, #2e2878 60%, #6644ff 140%);
  color: #fff;
}
h1 {
  margin: 0 0 0.35rem;
  font-size: clamp(1.75rem, 4vw, 2.4rem);
}
p {
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
}
.tabs {
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.35rem;
  border-radius: 999px;
}
.tab {
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
}
.tab:hover {
  color: #fff;
}
.tab.active {
  background: #fff;
  color: #6644ff;
}
@media (max-width: 560px) {
  .browse-header {
    padding: 1.5rem;
  }
  .tabs {
    width: 100%;
  }
  .tab {
    flex: 1;
    text-align: center;
  }
}
</style>
