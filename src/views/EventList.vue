<script setup>
import { computed, ref } from 'vue'
import { events } from '@/data/events'

const filters = ['All', ...new Set(events.map((e) => e.category))]
const activeCategory = ref('All')
const searchQuery = ref('')

const filteredEvents = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return events.filter((event) => {
    const matchCategory = activeCategory.value === 'All' || event.category === activeCategory.value
    const matchSearch =
      !q ||
      event.title.toLowerCase().includes(q) ||
      event.location.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q)
    return matchCategory && matchSearch
  })
})
</script>

<template>
  <div class="event-list-page">
    <div class="header-section">
      <div>
        <h2 class="section-title">Upcoming Events</h2>
        <p class="section-desc">Discover workshops, seminars, tech meetups, and competitions near you.</p>
      </div>
      <div class="toolbar">
        <input
          v-model="searchQuery"
          type="search"
          class="search-input"
          placeholder="Search events or cities..."
          aria-label="Search events"
        />
      </div>
    </div>

    <div class="filter-bar" role="tablist" aria-label="Filter by category">
      <button
        v-for="cat in filters"
        :key="cat"
        type="button"
        class="filter-pill"
        :class="{ active: activeCategory === cat }"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- LAYOUT SYSTEM: ADAPTIVE GRID (auto-fill) -->
    <div v-if="filteredEvents.length" class="event-grid">
      <!-- VISUAL HIERARCHY: GROUPING & COMMON REGIONS -->
      <article class="event-card" v-for="event in filteredEvents" :key="event.id">
        <div class="event-body">
          <div class="event-meta">
            <!-- LABEL CONTRAST: Recognition over Recall -->
            <span class="event-date">{{ event.date }}</span>
            <span class="event-category">{{ event.category }}</span>
          </div>
          <h3 class="event-title">{{ event.title }}</h3>
          <p class="event-loc">{{ event.location }}</p>
          <p class="event-desc">
            {{ event.description }}
          </p>

          <div class="card-footer">
            <span class="event-price">{{ event.price }}</span>
            <router-link :to="`/browse/events/${event.id}`" class="btn-link">
              View Event Details &rarr;
            </router-link>
          </div>
        </div>
      </article>
    </div>

    <div v-else class="empty-state">
      <p>No events found matching your filter.</p>
      <button type="button" class="btn-reset" @click="activeCategory = 'All'; searchQuery = ''">
        Reset Filters
      </button>
    </div>
  </div>
</template>

<style scoped>
.header-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.section-title {
  font-size: 2.2rem;
  margin-bottom: var(--space-2);
  color: var(--text-main);
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin: 0;
}

.search-input {
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  min-width: 240px;
  background: #ffffff;
  color: var(--text-main);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.filter-pill {
  padding: var(--space-2) var(--space-4);
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: #ffffff;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.filter-pill:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.filter-pill.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #ffffff;
}

/* ADAPTIVE GRID */
.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}

/* COMMON REGIONS */
.event-card {
  background: #ffffff;
  border-radius: var(--space-4);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.06);
}

/* PROXIMITY */
.event-body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.event-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
}

.event-date {
  background: rgba(102, 68, 255, 0.1);
  color: var(--primary);
  padding: var(--space-1) var(--space-2);
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
}

.event-category {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
}

.event-title {
  margin-bottom: var(--space-2);
  font-size: 1.35rem;
  color: var(--text-main);
}

.event-loc {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0 0 var(--space-4);
}

.event-desc {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0 0 var(--space-6);
  flex-grow: 1;
}

.card-footer {
  border-top: 1px solid var(--border-color);
  padding-top: var(--space-4);
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-3);
}

.event-price {
  font-weight: 700;
  color: var(--text-main);
  font-size: 0.95rem;
}

.btn-link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
}

.btn-link:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

.empty-state {
  text-align: center;
  padding: var(--space-12);
  background: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: var(--space-4);
  color: var(--text-muted);
}

.btn-reset {
  margin-top: var(--space-3);
  padding: var(--space-2) var(--space-6);
  border-radius: 10px;
  border: none;
  background: var(--primary);
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
}
</style>
