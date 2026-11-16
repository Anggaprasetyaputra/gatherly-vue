<script setup>
const metrics = [
  { label: 'Total Tickets Sold', value: '1,245', delta: '+12% vs last month' },
  { label: 'Page Views', value: '8,302', delta: '+18% vs last month' },
  { label: 'Revenue', value: '$12,450', delta: '+9% vs last month' }
]

const registrations = [
  { id: 1, name: 'Aulia Rahman', event: 'Jakarta Tech Summit 2026', date: 'Oct 11, 2026', status: 'Confirmed' },
  { id: 2, name: 'Bima Pratama', event: 'Indie Music Night', date: 'Oct 12, 2026', status: 'Confirmed' },
  { id: 3, name: 'Citra Lestari', event: 'Modern Art Exhibition', date: 'Oct 13, 2026', status: 'Confirmed' },
  { id: 4, name: 'Dimas Wijaya', event: 'Startup Pitch Day', date: 'Oct 14, 2026', status: 'Pending' },
  { id: 5, name: 'Eka Putri', event: 'Sunrise Yoga & Wellness', date: 'Oct 15, 2026', status: 'Confirmed' }
]
</script>

<template>
  <div class="dashboard-overview">
    <h2>Welcome back, Organizer</h2>

    <!-- GROUPING & PROXIMITY: Data metrik dikelompokkan ke dalam kartu agar mudah dibaca sekilas -->
    <div class="metrics-grid">
      <div v-for="m in metrics" :key="m.label" class="metric-card">
        <h3>{{ m.label }}</h3>
        <p class="metric-value">{{ m.value }}</p>
        <span class="metric-delta">{{ m.delta }}</span>
      </div>
    </div>

    <!-- DATA DENSITY & F-PATTERN: Tabel memaksimalkan kepadatan informasi agar mudah dipindai baris demi baris -->
    <div class="data-table-container">
      <div class="table-header">
        <h3>Recent Registrations</h3>
        <router-link to="/dashboard/attendees" class="table-link">View all &rarr;</router-link>
      </div>
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>Attendee Name</th>
              <th>Event</th>
              <th>Registration Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reg in registrations" :key="reg.id">
              <td><strong>{{ reg.name }}</strong></td>
              <td>{{ reg.event }}</td>
              <td>{{ reg.date }}</td>
              <td>
                <span class="status-badge" :class="reg.status.toLowerCase()">
                  {{ reg.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-overview h2 {
  margin-bottom: var(--space-6);
  color: var(--text-main);
}

/* GRID untuk menyusun metrik secara proporsional */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.metric-card {
  background: #ffffff;
  padding: var(--space-6);
  border-radius: var(--space-3);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.metric-card h3 {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: var(--space-2);
}

.metric-value {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--primary);
  margin: 0 0 var(--space-1);
}

.metric-delta {
  font-size: 0.85rem;
  color: #1f8f4e;
  font-weight: 600;
}

/* TABLE STYLES - Mengutamakan kerapian baris untuk Data Density */
.data-table-container {
  background: #ffffff;
  padding: var(--space-6);
  border-radius: var(--space-3);
  border: 1px solid var(--border-color);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
}

.table-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text-main);
}

.table-link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
}

.table-scroll {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--border-color);
  text-align: left;
  white-space: nowrap;
}

.data-table th {
  background: var(--bg-gray);
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.9rem;
}

.data-table td {
  color: var(--text-main);
  font-size: 0.95rem;
}

.status-badge {
  background: rgba(46, 204, 113, 0.12);
  color: #1f8f4e;
  padding: var(--space-1) var(--space-2);
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-badge.pending {
  background: rgba(247, 151, 30, 0.14);
  color: #b86500;
}
</style>
