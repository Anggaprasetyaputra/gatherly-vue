<script setup>
const features = [
  {
    icon: '🔍',
    title: 'Discover Easily',
    desc: 'Find events tailored to your interests using our smart category and location filters.'
  },
  {
    icon: '🎫',
    title: 'Seamless Ticketing',
    desc: 'Register with one click and get your digital QR ticket instantly on your device.'
  },
  {
    icon: '📊',
    title: 'Host Like a Pro',
    desc: 'Manage attendees, track revenue, and scan QR codes with our comprehensive dashboard.'
  }
]

const stats = [
  { value: '12K+', label: 'Events Hosted' },
  { value: '350K', label: 'Happy Attendees' },
  { value: '80+', label: 'Cities Covered' }
]
</script>

<template>
  <div class="home-page">
    <!-- THE FOLD & Z-PATTERN:
         1. Navbar (kiri ke kanan)
         2. Diagonal ke Hero Title (Scale & Ranked Importance)
         3. Berhenti di Primary CTA (Focal Point / Squint Test) -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="hero-badge">Community Event Platform</span>
        <h1 class="hero-title">Connect, Discover, and Experience</h1>
        <p class="hero-subtitle">
          A community event platform designed to bring ideas together. Discover hundreds of events near you.
        </p>
        <div class="hero-action">
          <router-link to="/browse/events" class="btn-primary">Discover Events</router-link>
          <router-link to="/dashboard" class="btn-secondary">Organizer Dashboard</router-link>
        </div>

        <div class="hero-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTINUOUS Z-PATTERN: Diagonal dari CTA menuju judul fitur, lalu membaca grid 3 kolom secara horizontal -->
    <section class="features-section">
      <div class="features-header">
        <h2>Why Choose Gatherly?</h2>
        <p>Everything you need to host or attend unforgettable events.</p>
      </div>
      <div class="features-grid">
        <div v-for="item in features" :key="item.title" class="feature-card">
          <div class="feature-icon" aria-hidden="true">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  /* THE FOLD: Pastikan hero & tombol utama langsung terlihat di atas lipatan layar (Above the Fold) */
  min-height: 65vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: var(--bg-light);
  border-radius: var(--space-6);
  border: 1px solid var(--border-color);
  padding: var(--space-12) var(--space-6);
  margin-bottom: var(--space-12);
}

.hero-content {
  max-width: 820px;
  /* Z-PATTERN: Elemen disusun terpusat agar alur pandang mengalir alami ke CTA */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-badge {
  display: inline-block;
  background: var(--primary-light);
  color: var(--primary);
  font-weight: 700;
  font-size: 0.85rem;
  padding: var(--space-1) var(--space-4);
  border-radius: 999px;
  margin-bottom: var(--space-4);
  letter-spacing: 0.02em;
}

/* SCALE & RANKED IMPORTANCE: Ukuran font terbesar menandai prioritas baca utama */
.hero-title {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.1;
  margin-bottom: var(--space-6);
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin: 0 0 var(--space-8);
  max-width: 600px;
}

.hero-action {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
}

/* FOCAL POINT: Tombol primer ber-kontras tinggi agar lolos Squint Test */
.btn-primary {
  background-color: var(--primary);
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  padding: var(--space-3) var(--space-8);
  border-radius: 12px;
  transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 8px 20px rgba(102, 68, 255, 0.3);
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #ffffff;
  color: var(--text-main);
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  padding: var(--space-3) var(--space-6);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.btn-secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-8);
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border-color);
  width: 100%;
  max-width: 560px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-item strong {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
}

.stat-item span {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* FEATURES SECTION */
.features-section {
  padding: 0 var(--space-4);
}

.features-header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.features-header h2 {
  font-size: 2.2rem;
  color: var(--text-main);
  margin-bottom: var(--space-2);
}

.features-header p {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-6);
}

.feature-card {
  background: var(--bg-light);
  padding: var(--space-8);
  border-radius: var(--space-4);
  border: 1px solid var(--border-color);
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto var(--space-4);
  border-radius: 14px;
  background: var(--primary-light);
  display: grid;
  place-items: center;
  font-size: 1.75rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  color: var(--text-main);
  margin-bottom: var(--space-2);
}

.feature-card p {
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}
</style>
