<script setup>
import { computed, ref } from 'vue'
import { events } from '@/data/events'

const filters = ['All', ...new Set(events.map((e) => e.category))]
const active = ref('All')

const filtered = computed(() =>
  active.value === 'All' ? events : events.filter((e) => e.category === active.value)
)
</script>

<template>
  <section class="event-list">
    <div class="toolbar">
      <h2>Upcoming Events <span class="count">{{ filtered.length }}</span></h2>
      <div class="filters">
        <button
          v-for="f in filters"
          :key="f"
          :class="{ active: active === f }"
          @click="active = f"
        >
          {{ f }}
        </button>
      </div>
    </div>

    <div class="grid">
      <router-link
        v-for="event in filtered"
        :key="event.id"
        :to="`/browse/events/${event.id}`"
        class="card"
      >
        <div class="cover" :style="{ background: event.gradient }">
          <span class="cover-icon">{{ event.icon }}</span>
          <span class="tag">{{ event.category }}</span>
        </div>
        <div class="body">
          <h3>{{ event.title }}</h3>
          <p class="meta">📅 {{ event.date }}</p>
          <p class="meta">📍 {{ event.location }}</p>
          <div class="footer">
            <strong>{{ event.price }}</strong>
            <span class="link">View details →</span>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
h2 {
  margin: 0;
  color: #1c1948;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.count {
  font-size: 0.8rem;
  background: #efeaff;
  color: #6644ff;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
}
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.filters button {
  border: 1.5px solid #e2dff0;
  background: #fff;
  color: #1c1948;
  padding: 0.4rem 0.95rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.filters button:hover {
  border-color: #6644ff;
  color: #6644ff;
}
.filters button.active {
  background: #6644ff;
  border-color: #6644ff;
  color: #fff;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 10px 30px rgba(28, 25, 72, 0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s, box-shadow 0.25s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(28, 25, 72, 0.14);
}
.cover {
  height: 150px;
  position: relative;
  display: grid;
  place-items: center;
}
.cover-icon {
  font-size: 3.5rem;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s;
}
.card:hover .cover-icon {
  transform: scale(1.12) rotate(-6deg);
}
.tag {
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;
  background: rgba(255, 255, 255, 0.92);
  color: #1c1948;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
}
.body {
  padding: 1.25rem 1.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
h3 {
  margin: 0 0 0.6rem;
  color: #1c1948;
  font-size: 1.1rem;
}
.meta {
  margin: 0.15rem 0;
  color: #6b6a85;
  font-size: 0.88rem;
}
.footer {
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer strong {
  color: #1c1948;
}
.link {
  color: #6644ff;
  font-weight: 600;
  font-size: 0.88rem;
}
@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
