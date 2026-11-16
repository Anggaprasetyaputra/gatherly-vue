<script setup>
import { computed, ref } from 'vue'

const query = ref('')
const attendees = [
  { id: 'TKT-101', name: 'Aulia Rahman', email: 'aulia@example.com', event: 'Jakarta Tech Summit 2026', checkedIn: true },
  { id: 'TKT-102', name: 'Bima Pratama', email: 'bima@example.com', event: 'Indie Music Night', checkedIn: true },
  { id: 'TKT-103', name: 'Citra Lestari', email: 'citra@example.com', event: 'Modern Art Exhibition', checkedIn: false },
  { id: 'TKT-104', name: 'Dimas Wijaya', email: 'dimas@example.com', event: 'Startup Pitch Day', checkedIn: false },
  { id: 'TKT-105', name: 'Eka Putri', email: 'eka@example.com', event: 'Sunrise Yoga & Wellness', checkedIn: true }
]

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return !q
    ? attendees
    : attendees.filter((a) => a.name.toLowerCase().includes(q) || a.id.toLowerCase().includes(q))
})
</script>

<template>
  <div class="panel">
    <div class="panel-head">
      <h2>Attendees Directory</h2>
      <input v-model="query" type="search" class="search" placeholder="Search name or ticket ID..." />
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Event</th>
            <th>Check-in</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in filtered" :key="a.id">
            <td><code>{{ a.id }}</code></td>
            <td><strong>{{ a.name }}</strong></td>
            <td>{{ a.email }}</td>
            <td>{{ a.event }}</td>
            <td>
              <span class="status" :class="a.checkedIn ? 'ok' : 'wait'">
                {{ a.checkedIn ? 'Checked In' : 'Not Yet' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.panel {
  background: #ffffff;
  padding: var(--space-6);
  border-radius: var(--space-3);
  border: 1px solid var(--border-color);
}
.panel-head {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
}
.panel-head h2 {
  margin: 0;
  font-size: 1.25rem;
}
.search {
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  min-width: 220px;
}
.table-wrap {
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
  font-size: 0.9rem;
}
.status {
  padding: var(--space-1) var(--space-2);
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}
.status.ok {
  background: rgba(46, 204, 113, 0.14);
  color: #1f8f4e;
}
.status.wait {
  background: var(--bg-gray);
  color: var(--text-muted);
}
</style>
