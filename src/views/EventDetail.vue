<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getEventById } from '@/data/events'

const route = useRoute()

const event = computed(() => getEventById(route.params.id) || getEventById(1))
const notFound = computed(() => !getEventById(route.params.id))

const tickets = ref(1)
const registered = ref(false)

watch(
  () => route.params.id,
  () => {
    tickets.value = 1
    registered.value = false
  }
)
</script>

<template>
  <div class="event-detail-page">
    <button type="button" @click="$router.push('/browse/events')" class="btn-back">
      &larr; Back to Events
    </button>

    <p v-if="notFound" class="notice">
      Event #{{ $route.params.id }} not found — showing a sample event instead.
    </p>

    <div class="detail-header">
      <span class="event-tag">{{ event.category }}</span>
      <h1>{{ event.title }}</h1>
      <div class="meta-info">
        <span class="meta-item">{{ event.date }} ({{ event.time }})</span>
        <span class="meta-item">{{ event.location }}</span>
        <span class="meta-item">Quota: {{ event.seats }} Attendees</span>
      </div>
    </div>

    <!-- ASYMMETRICAL LAYOUT (2fr : 1fr) -->
    <div class="detail-content grid-asymmetric">
      <!-- F-PATTERN: Breaking text with Headings & Bullet Points -->
      <div class="main-desc">
        <h2>About This Event</h2>
        <p>{{ event.description }}</p>
        <p>
          Hosted by <strong>{{ event.organizer }}</strong>, this session is designed to deliver practical takeaways,
          meaningful networking, and hands-on insights you can apply right away.
        </p>

        <h2>Event Agenda</h2>
        <ul class="agenda-list">
          <li v-for="item in event.agenda" :key="item.time">
            <strong>{{ item.time }}</strong> &mdash; {{ item.title }}
          </li>
        </ul>
      </div>

      <!-- FOCAL POINT & STICKY PANE -->
      <aside class="sidebar">
        <div class="ticket-card sticky-pane">
          <h3>Attendee Registration</h3>
          <p class="price">{{ event.price }}</p>
          <p class="ticket-desc">Secure your seat now before the quota is full.</p>

          <template v-if="!registered">
            <div class="qty-row">
              <span>Tickets</span>
              <div class="stepper">
                <button type="button" :disabled="tickets <= 1" @click="tickets--">-</button>
                <span>{{ tickets }}</span>
                <button type="button" :disabled="tickets >= 5" @click="tickets++">+</button>
              </div>
            </div>
            <!-- STRONGEST FOCAL POINT (Squint Test) -->
            <button type="button" class="btn-register" @click="registered = true">
              Register Now
            </button>
          </template>
          <div v-else class="register-success">
            You're registered for <strong>{{ tickets }}</strong> ticket(s)!
          </div>

          <p class="spots">Only {{ Math.min(12, event.seats) }} seats left!</p>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.btn-back {
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: var(--space-6);
  padding: 0;
  color: var(--text-muted);
}

.btn-back:hover {
  color: var(--primary);
}

.notice {
  background: var(--primary-light);
  color: var(--primary);
  padding: var(--space-3) var(--space-4);
  border-radius: 10px;
  font-weight: 600;
  margin-bottom: var(--space-6);
}

.detail-header {
  background: var(--bg-light);
  border-radius: var(--space-4);
  border: 1px solid var(--border-color);
  padding: var(--space-12) var(--space-8);
  margin-bottom: var(--space-8);
}

.event-tag {
  display: inline-block;
  background: rgba(102, 68, 255, 0.1);
  color: var(--primary);
  padding: var(--space-1) var(--space-4);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: var(--space-4);
}

.detail-header h1 {
  font-size: clamp(1.9rem, 4vw, 2.8rem);
  margin-bottom: var(--space-4);
  line-height: 1.2;
  color: var(--text-main);
}

.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
}

.meta-item {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 1.02rem;
}

/* ASYMMETRICAL GRID (8:4 / 2fr:1fr) */
.grid-asymmetric {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
  align-items: start;
}

.main-desc h2 {
  margin-bottom: var(--space-4);
  font-size: 1.7rem;
  color: var(--text-main);
  border-left: 4px solid var(--primary);
  padding-left: var(--space-3);
}

.main-desc p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: var(--space-6);
  font-size: 1.05rem;
}

.agenda-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-8) 0;
}

.agenda-list li {
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 1.05rem;
}

.agenda-list strong {
  color: var(--text-main);
}

/* FOCAL POINT CARD */
.ticket-card {
  background: #ffffff;
  padding: var(--space-8);
  border-radius: var(--space-4);
  border: 1px solid var(--border-color);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  text-align: center;
}

/* STICKY BEHAVIOR */
.sticky-pane {
  position: sticky;
  top: 100px;
}

.ticket-card h3 {
  font-size: 1.4rem;
  margin-bottom: var(--space-2);
  color: var(--text-main);
}

.price {
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--primary);
  margin: 0 0 var(--space-2);
}

.ticket-desc {
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

.qty-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
  padding: var(--space-2) var(--space-3);
  background: var(--bg-gray);
  border-radius: 10px;
  font-weight: 600;
}

.stepper {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.stepper button {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

.stepper button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-register {
  width: 100%;
  padding: var(--space-4);
  background: var(--primary);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  box-shadow: 0 8px 20px rgba(102, 68, 255, 0.28);
}

.btn-register:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.register-success {
  padding: var(--space-4);
  border-radius: 12px;
  background: rgba(46, 204, 113, 0.14);
  color: #1f8f4e;
  font-weight: 600;
}

.spots {
  margin-top: var(--space-4);
  margin-bottom: 0;
  color: var(--danger);
  font-weight: 600;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .grid-asymmetric {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
  .sticky-pane {
    position: static;
  }
}
</style>
