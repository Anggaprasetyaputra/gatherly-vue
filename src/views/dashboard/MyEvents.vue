<script setup>
import { events } from '@/data/events'
</script>

<template>
  <div class="panel">
    <div class="panel-head">
      <h2>My Events</h2>
      <span class="badge">{{ events.length }} Active</span>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Category</th>
            <th>Date</th>
            <th>Quota</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ev in events" :key="ev.id">
            <td><strong>{{ ev.title }}</strong></td>
            <td>{{ ev.category }}</td>
            <td>{{ ev.date }}</td>
            <td>{{ ev.seats }} seats</td>
            <td>{{ ev.price }}</td>
            <td>
              <router-link :to="`/browse/events/${ev.id}`" class="link">View &rarr;</router-link>
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
}
.panel-head h2 {
  margin: 0;
  font-size: 1.25rem;
}
.badge {
  background: var(--primary-light);
  color: var(--primary);
  padding: var(--space-1) var(--space-3);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
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
.link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
}
</style>
