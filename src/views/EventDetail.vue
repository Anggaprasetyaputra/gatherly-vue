<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getEventById } from '@/data/events'

const route = useRoute()

// Falls back to event #1 so the "sample" detail page always has content
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
  <section class="event-detail">
    <button class="back" @click="$router.push('/browse/events')">← Back to Events</button>

    <p v-if="notFound" class="notice">
      Event #{{ $route.params.id }} not found — showing a sample event instead.
    </p>

    <div class="hero" :style="{ background: event.gradient }">
      <span class="hero-icon">{{ event.icon }}</span>
      <div>
        <span class="tag">{{ event.category }}</span>
        <h1>{{ event.title }}</h1>
        <p>by {{ event.organizer }}</p>
      </div>
    </div>

    <div class="layout">
      <div class="content">
        <div class="facts">
          <div class="fact">
            <span>📅</span>
            <div><small>Date</small><strong>{{ event.date }}</strong></div>
          </div>
          <div class="fact">
            <span>⏰</span>
            <div><small>Time</small><strong>{{ event.time }}</strong></div>
          </div>
          <div class="fact">
            <span>📍</span>
            <div><small>Location</small><strong>{{ event.location }}</strong></div>
          </div>
        </div>

        <article class="panel">
          <h2>About this event</h2>
          <p>{{ event.description }}</p>
        </article>

        <article class="panel">
          <h2>Agenda</h2>
          <ol class="agenda">
            <li v-for="item in event.agenda" :key="item.time">
              <span class="time">{{ item.time }}</span>
              <span class="title">{{ item.title }}</span>
            </li>
          </ol>
        </article>
      </div>

      <aside class="sidebar">
        <div class="register-card">
          <small>Price per ticket</small>
          <div class="price">{{ event.price }}</div>
          <p class="seats">🎟️ {{ event.seats }} seats available</p>

          <template v-if="!registered">
            <label class="qty">
              Tickets
              <div class="stepper">
                <button type="button" :disabled="tickets <= 1" @click="tickets--">−</button>
                <span>{{ tickets }}</span>
                <button type="button" :disabled="tickets >= 5" @click="tickets++">+</button>
              </div>
            </label>
            <button class="register" @click="registered = true">Register Now</button>
          </template>
          <div v-else class="success">
            🎉 You're registered for <strong>{{ tickets }}</strong> ticket(s)! (mock)
          </div>

          <ul class="perks">
            <li>✔ Instant e-ticket</li>
            <li>✔ Free cancellation up to 24h</li>
            <li>✔ Certificate of attendance</li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.back {
  background: #fff;
  border: 1.5px solid #e2dff0;
  color: #1c1948;
  font-weight: 600;
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  cursor: pointer;
  margin-bottom: 1.25rem;
  transition: all 0.2s;
}
.back:hover {
  border-color: #6644ff;
  color: #6644ff;
  transform: translateX(-3px);
}
.notice {
  background: #fff6e5;
  color: #8a5a00;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  margin: 0 0 1rem;
  font-size: 0.9rem;
}
.hero {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2.25rem;
  border-radius: 24px;
  color: #fff;
  margin-bottom: 1.75rem;
}
.hero-icon {
  font-size: 4rem;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.2);
}
.tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.92);
  color: #1c1948;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
}
.hero h1 {
  margin: 0.5rem 0 0.25rem;
  font-size: clamp(1.5rem, 4vw, 2.3rem);
  line-height: 1.2;
}
.hero p {
  margin: 0;
  opacity: 0.85;
}
.layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 1.5rem;
  align-items: start;
}
.facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.fact {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  background: #fff;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(28, 25, 72, 0.06);
}
.fact > span {
  font-size: 1.4rem;
}
.fact small {
  display: block;
  color: #6b6a85;
  font-size: 0.75rem;
}
.fact strong {
  color: #1c1948;
  font-size: 0.9rem;
}
.panel {
  background: #fff;
  padding: 1.75rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(28, 25, 72, 0.06);
  margin-bottom: 1.25rem;
}
.panel h2 {
  margin: 0 0 0.75rem;
  color: #1c1948;
  font-size: 1.25rem;
}
.panel p {
  margin: 0;
  color: #4a4865;
}
.agenda {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.agenda::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: #ebe8f7;
}
.agenda li {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.6rem 0;
  position: relative;
}
.time {
  flex-shrink: 0;
  width: 62px;
  text-align: center;
  background: #efeaff;
  color: #6644ff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.3rem 0;
  border-radius: 8px;
  position: relative;
  z-index: 1;
}
.title {
  color: #1c1948;
  font-weight: 500;
}
.sidebar {
  position: sticky;
  top: 90px;
}
.register-card {
  background: #1c1948;
  color: #fff;
  border-radius: 22px;
  padding: 1.75rem;
  box-shadow: 0 20px 45px rgba(28, 25, 72, 0.25);
}
.register-card small {
  color: rgba(255, 255, 255, 0.6);
}
.price {
  font-size: 2rem;
  font-weight: 800;
  margin: 0.15rem 0 0.25rem;
}
.seats {
  margin: 0 0 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
}
.qty {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin-bottom: 1rem;
}
.stepper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 0.25rem;
}
.stepper button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: #6644ff;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
}
.stepper button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.stepper span {
  min-width: 1.25rem;
  text-align: center;
}
.register {
  width: 100%;
  padding: 0.9rem;
  border: none;
  border-radius: 14px;
  background: #6644ff;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.register:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 68, 255, 0.5);
}
.success {
  background: rgba(56, 239, 125, 0.15);
  color: #b9f8d0;
  padding: 0.9rem 1rem;
  border-radius: 14px;
  font-size: 0.92rem;
}
.perks {
  list-style: none;
  padding: 1.25rem 0 0;
  margin: 1.25rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: grid;
  gap: 0.4rem;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.8);
}
@media (max-width: 960px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .sidebar {
    position: static;
  }
}
@media (max-width: 640px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
  }
  .hero-icon {
    width: 72px;
    height: 72px;
    font-size: 2.75rem;
  }
  .facts {
    grid-template-columns: 1fr;
  }
  .panel {
    padding: 1.25rem;
  }
}
</style>
