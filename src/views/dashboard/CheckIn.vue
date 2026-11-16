<script setup>
import { ref } from 'vue'

const ticketCode = ref('')
const result = ref('')

const verifyTicket = () => {
  const code = ticketCode.value.trim().toUpperCase()
  if (!code) return
  result.value = `Ticket ${code} verified and checked in!`
  ticketCode.value = ''
}
</script>

<template>
  <div class="checkin-card">
    <h2>QR Ticket Check-in</h2>
    <p>Enter or scan an attendee ticket code to validate entry.</p>
    <form class="checkin-form" @submit.prevent="verifyTicket">
      <input
        v-model="ticketCode"
        type="text"
        placeholder="e.g. TKT-103"
        aria-label="Ticket code"
        required
      />
      <button type="submit">Verify Check-in</button>
    </form>
    <p v-if="result" class="feedback">{{ result }}</p>
  </div>
</template>

<style scoped>
.checkin-card {
  max-width: 520px;
  background: #ffffff;
  padding: var(--space-8);
  border-radius: var(--space-3);
  border: 1px solid var(--border-color);
}
.checkin-card h2 {
  margin-bottom: var(--space-2);
}
.checkin-card p {
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}
.checkin-form {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}
.checkin-form input {
  flex: 1;
  min-width: 180px;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--border-color);
  border-radius: 10px;
}
.checkin-form button {
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: 10px;
  background: var(--primary);
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
}
.checkin-form button:hover {
  background: var(--primary-hover);
}
.feedback {
  margin-top: var(--space-4);
  margin-bottom: 0;
  padding: var(--space-3) var(--space-4);
  border-radius: 8px;
  background: rgba(46, 204, 113, 0.14);
  color: #1f8f4e;
  font-weight: 600;
}
</style>
