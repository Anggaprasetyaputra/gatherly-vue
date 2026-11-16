<script setup>
const values = [
  { icon: '🌍', title: 'Inclusive', text: 'Events for everyone, everywhere.' },
  { icon: '⚡', title: 'Effortless', text: 'Discover and register in seconds.' },
  { icon: '💜', title: 'Community-first', text: 'Built around real human connection.' }
]
</script>

<template>
  <div class="about">
    <header class="page-header">
      <span class="eyebrow">About Gatherly</span>
      <h1>Bringing people together, one event at a time.</h1>
      <p>
        Gatherly was born from a simple idea: the best moments in life happen when people gather.
        We make it easy to find, join, and host experiences that matter.
      </p>
    </header>

    <section class="blocks">
      <article class="block mission">
        <span class="block-icon">🎯</span>
        <h2>Our Mission</h2>
        <p>
          To empower communities by making events accessible to everyone — connecting organizers
          with attendees through a simple, delightful, and reliable platform.
        </p>
      </article>
      <article class="block vision">
        <span class="block-icon">🔭</span>
        <h2>Our Vision</h2>
        <p>
          A world where no one misses out on experiences that inspire them, and where every city
          has a thriving calendar of events powered by its own community.
        </p>
      </article>
    </section>

    <section class="values">
      <div v-for="v in values" :key="v.title" class="value">
        <span>{{ v.icon }}</span>
        <h3>{{ v.title }}</h3>
        <p>{{ v.text }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  text-align: center;
  max-width: 720px;
  margin: 1rem auto 3rem;
}
.eyebrow {
  color: #6644ff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
}
h1 {
  color: #1c1948;
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  line-height: 1.15;
  margin: 0.75rem 0 1rem;
  letter-spacing: -0.02em;
}
.page-header p {
  color: #6b6a85;
  font-size: 1.05rem;
  margin: 0;
}
.blocks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.block {
  padding: 2.25rem;
  border-radius: 22px;
}
.mission {
  background: #1c1948;
  color: #fff;
}
.vision {
  background: #6644ff;
  color: #fff;
}
.block-icon {
  font-size: 2rem;
}
.block h2 {
  margin: 0.75rem 0 0.5rem;
}
.block p {
  margin: 0;
  opacity: 0.85;
}
.values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}
.value {
  background: #fff;
  border-radius: 18px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(28, 25, 72, 0.06);
}
.value span {
  font-size: 1.8rem;
}
.value h3 {
  margin: 0.5rem 0 0.25rem;
  color: #1c1948;
}
.value p {
  margin: 0;
  color: #6b6a85;
  font-size: 0.92rem;
}
@media (max-width: 768px) {
  .blocks,
  .values {
    grid-template-columns: 1fr;
  }
  .block {
    padding: 1.75rem;
  }
}
</style>
