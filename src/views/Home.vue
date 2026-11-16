<script setup>
const stats = [
  { value: '12K+', label: 'Events hosted' },
  { value: '350K', label: 'Happy attendees' },
  { value: '80+', label: 'Cities' }
]

const sitemap = [
  { to: '/', label: 'Home', icon: '🏠', desc: 'Landing page' },
  { to: '/about', label: 'About', icon: '💡', desc: 'Our mission & vision' },
  {
    to: '/browse',
    label: 'Browse',
    icon: '🧭',
    desc: 'Parent route (nested views)',
    children: [
      { to: '/browse/events', label: 'Event List' },
      { to: '/browse/events/1', label: 'Event Detail (:id)' },
      { to: '/browse/category', label: 'Category' }
    ]
  },
  { to: '/contact', label: 'Contact', icon: '✉️', desc: 'Get in touch' }
]
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-text">
        <span class="badge">✨ Your next experience starts here</span>
        <h1>Connect, Discover, and <span class="highlight">Experience</span></h1>
        <p>
          Gatherly helps you find events you'll love — from tech summits and music nights to art
          exhibitions and food festivals. Meet people, learn something new, and make memories.
        </p>
        <div class="cta-group">
          <router-link to="/browse/events" class="btn btn-primary">Explore Events →</router-link>
          <router-link to="/browse/category" class="btn btn-ghost">Browse Categories</router-link>
        </div>
        <div class="stats">
          <div v-for="s in stats" :key="s.label" class="stat">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="float-card card-a">
          <span class="fc-icon">💻</span>
          <div>
            <strong>Tech Summit</strong>
            <small>12 Dec · Jakarta</small>
          </div>
        </div>
        <div class="float-card card-b">
          <span class="fc-icon">🎸</span>
          <div>
            <strong>Indie Music Night</strong>
            <small>18 Dec · Jakarta</small>
          </div>
        </div>
        <div class="float-card card-c">
          <span class="fc-icon">🎨</span>
          <div>
            <strong>Art Exhibition</strong>
            <small>20 Dec · Free</small>
          </div>
        </div>
        <div class="orb"></div>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="feature">
        <span>🔍</span>
        <h3>Discover</h3>
        <p>Find events tailored to your interests across dozens of categories.</p>
      </div>
      <div class="feature">
        <span>🤝</span>
        <h3>Connect</h3>
        <p>Meet like-minded people and grow your community.</p>
      </div>
      <div class="feature">
        <span>🎟️</span>
        <h3>Experience</h3>
        <p>Register in seconds and enjoy unforgettable moments.</p>
      </div>
    </section>

    <!-- Sitemap -->
    <section class="sitemap">
      <h2>Visual Sitemap</h2>
      <p class="sitemap-sub">All routes in this SPA — click any node to navigate.</p>
      <div class="sitemap-grid">
        <div v-for="node in sitemap" :key="node.to" class="node" :class="{ parent: node.children }">
          <router-link :to="node.to" class="node-head">
            <span class="node-icon">{{ node.icon }}</span>
            <div>
              <strong>{{ node.label }}</strong>
              <small>{{ node.to }} · {{ node.desc }}</small>
            </div>
          </router-link>
          <ul v-if="node.children" class="node-children">
            <li v-for="child in node.children" :key="child.to">
              <router-link :to="child.to">
                <span>{{ child.label }}</span>
                <code>{{ child.to }}</code>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 3.5rem 3rem;
  border-radius: 28px;
  background: radial-gradient(circle at 85% 20%, rgba(102, 68, 255, 0.55), transparent 50%), #1c1948;
  color: #fff;
  overflow: hidden;
  position: relative;
}
.badge {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
}
h1 {
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  line-height: 1.1;
  margin: 0 0 1.25rem;
  letter-spacing: -0.03em;
}
.highlight {
  background: linear-gradient(90deg, #a48bff, #6644ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-text p {
  color: rgba(255, 255, 255, 0.75);
  max-width: 520px;
  margin: 0 0 2rem;
}
.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.btn {
  padding: 0.85rem 1.5rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
}
.btn-primary {
  background: #6644ff;
  color: #fff;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 68, 255, 0.5);
}
.btn-ghost {
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
}
.stats {
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
}
.stat strong {
  display: block;
  font-size: 1.6rem;
}
.stat span {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

/* hero visual */
.hero-visual {
  position: relative;
  height: 340px;
}
.orb {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6644ff, #a48bff);
  filter: blur(4px);
  opacity: 0.35;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.float-card {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1.1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  color: #1c1948;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
  animation: float 5s ease-in-out infinite;
}
.float-card strong {
  display: block;
  font-size: 0.95rem;
}
.float-card small {
  color: #6b6a85;
}
.fc-icon {
  font-size: 1.6rem;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: #efeaff;
}
.card-a {
  top: 6%;
  left: 8%;
}
.card-b {
  top: 40%;
  right: 0;
  animation-delay: 1.2s;
}
.card-c {
  bottom: 4%;
  left: 18%;
  animation-delay: 2.4s;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

/* features */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin: 2.5rem 0;
}
.feature {
  background: #fff;
  padding: 1.75rem;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(28, 25, 72, 0.06);
}
.feature span {
  font-size: 1.8rem;
}
.feature h3 {
  margin: 0.6rem 0 0.4rem;
  color: #1c1948;
}
.feature p {
  margin: 0;
  color: #6b6a85;
  font-size: 0.95rem;
}

/* sitemap */
.sitemap {
  background: #fff;
  border-radius: 24px;
  padding: 2.25rem;
  box-shadow: 0 10px 30px rgba(28, 25, 72, 0.06);
}
.sitemap h2 {
  margin: 0;
  color: #1c1948;
}
.sitemap-sub {
  margin: 0.25rem 0 1.75rem;
  color: #6b6a85;
}
.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: start;
}
.node {
  border: 2px solid #ebe8f7;
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.2s;
}
.node:hover {
  border-color: #6644ff;
}
.node.parent {
  border-color: #6644ff;
}
.node-head {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  color: #1c1948;
}
.node.parent .node-head {
  background: #6644ff;
  color: #fff;
}
.node-head strong {
  display: block;
}
.node-head small {
  font-size: 0.75rem;
  opacity: 0.7;
}
.node-icon {
  font-size: 1.4rem;
}
.node-children {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  background: #f7f6fc;
}
.node-children a {
  display: flex;
  flex-direction: column;
  padding: 0.55rem 0.75rem;
  border-left: 3px solid #a48bff;
  margin: 0.35rem 0;
  border-radius: 0 10px 10px 0;
  background: #fff;
  text-decoration: none;
  color: #1c1948;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.15s;
}
.node-children a:hover {
  background: #efeaff;
}
.node-children code {
  font-size: 0.72rem;
  color: #6644ff;
  font-weight: 400;
}

@media (max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.75rem;
  }
  .hero-visual {
    height: 280px;
  }
  .sitemap-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .hero {
    border-radius: 20px;
    padding: 2rem 1.25rem;
  }
  .hero-visual {
    display: none;
  }
  .stats {
    gap: 1.25rem;
  }
  .features,
  .sitemap-grid {
    grid-template-columns: 1fr;
  }
  .sitemap {
    padding: 1.5rem;
  }
}
</style>
