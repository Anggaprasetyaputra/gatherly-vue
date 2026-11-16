<script setup>
const categories = [
  { icon: '🎵', name: 'Music', count: 128, color: '#ff6a88' },
  { icon: '💻', name: 'Tech', count: 96, color: '#6644ff' },
  { icon: '🎨', name: 'Art', count: 74, color: '#f7971e' },
  { icon: '🚀', name: 'Business', count: 58, color: '#11998e' },
  { icon: '🍜', name: 'Food & Drink', count: 112, color: '#ee0979' },
  { icon: '🧘', name: 'Sports & Wellness', count: 63, color: '#2193b0' },
  { icon: '📚', name: 'Education', count: 81, color: '#8e54e9' },
  { icon: '🎮', name: 'Gaming', count: 45, color: '#1c1948' }
]
</script>

<template>
  <section class="category">
    <div class="section-head">
      <h2>Event Categories</h2>
      <p>Pick a category to explore related events.</p>
    </div>
    <div class="grid">
      <router-link
        v-for="c in categories"
        :key="c.name"
        to="/browse/events"
        class="card"
        :style="{ '--accent': c.color }"
      >
        <span class="icon">{{ c.icon }}</span>
        <h3>{{ c.name }}</h3>
        <p>{{ c.count }} events</p>
        <span class="arrow">→</span>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.section-head h2 {
  margin: 0;
  color: #1c1948;
}
.section-head p {
  margin: 0.25rem 0 1.5rem;
  color: #6b6a85;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}
.card {
  position: relative;
  background: #fff;
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  text-decoration: none;
  color: #1c1948;
  box-shadow: 0 10px 30px rgba(28, 25, 72, 0.06);
  border: 2px solid transparent;
  overflow: hidden;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.card::after {
  content: '';
  position: absolute;
  right: -40px;
  top: -40px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.1;
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-6px);
  border-color: var(--accent);
  box-shadow: 0 18px 40px rgba(28, 25, 72, 0.12);
}
.card:hover::after {
  transform: scale(1.6);
}
.icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  font-size: 1.8rem;
  border-radius: 16px;
  background: color-mix(in srgb, var(--accent) 14%, white);
}
h3 {
  margin: 1rem 0 0.2rem;
  font-size: 1.15rem;
}
p {
  margin: 0;
  color: #6b6a85;
  font-size: 0.9rem;
}
.arrow {
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
  color: var(--accent);
  font-weight: 700;
  font-size: 1.2rem;
  transition: transform 0.2s;
}
.card:hover .arrow {
  transform: translateX(4px);
}
@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.85rem;
  }
  .card {
    padding: 1.25rem 1rem;
  }
  .arrow {
    display: none;
  }
}
</style>
