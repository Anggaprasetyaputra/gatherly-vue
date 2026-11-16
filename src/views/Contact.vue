<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', subject: 'General', message: '' })
const sent = ref(false)

const contacts = [
  { icon: '📧', label: 'Email', value: 'hello@gatherly.id', href: 'mailto:hello@gatherly.id' },
  { icon: '📞', label: 'Phone', value: '+62 812-3456-7890', href: 'tel:+6281234567890' },
  { icon: '📍', label: 'Office', value: 'Jl. Sudirman No. 1, Jakarta' },
  { icon: '🕘', label: 'Hours', value: 'Mon – Fri, 09:00 – 17:00' }
]

const submit = () => {
  // Mock submit – no backend
  sent.value = true
  setTimeout(() => {
    sent.value = false
    Object.assign(form, { name: '', email: '', subject: 'General', message: '' })
  }, 3000)
}
</script>

<template>
  <div class="contact">
    <header class="page-header">
      <h1>Get in Touch</h1>
      <p>Questions, partnerships, or just want to say hi? We'd love to hear from you.</p>
    </header>

    <div class="grid">
      <aside class="info">
        <h2>Contact Info</h2>
        <ul>
          <li v-for="c in contacts" :key="c.label">
            <span class="icon">{{ c.icon }}</span>
            <div>
              <small>{{ c.label }}</small>
              <a v-if="c.href" :href="c.href">{{ c.value }}</a>
              <span v-else>{{ c.value }}</span>
            </div>
          </li>
        </ul>
      </aside>

      <form class="form" @submit.prevent="submit">
        <div class="row">
          <label>
            Name
            <input v-model="form.name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input v-model="form.email" type="email" placeholder="you@example.com" required />
          </label>
        </div>
        <label>
          Subject
          <select v-model="form.subject">
            <option>General</option>
            <option>Partnership</option>
            <option>Host an Event</option>
            <option>Support</option>
          </select>
        </label>
        <label>
          Message
          <textarea v-model="form.message" rows="5" placeholder="Write your message..." required></textarea>
        </label>
        <button type="submit" :disabled="sent">{{ sent ? 'Sending…' : 'Send Message' }}</button>
        <transition name="pop">
          <p v-if="sent" class="success">✅ Thanks, {{ form.name || 'friend' }}! Your message has been sent (mock).</p>
        </transition>
      </form>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 2rem;
}
h1 {
  color: #1c1948;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin: 0 0 0.5rem;
}
.page-header p {
  color: #6b6a85;
  margin: 0;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 1.5rem;
}
.info {
  background: #1c1948;
  color: #fff;
  border-radius: 22px;
  padding: 2rem;
}
.info h2 {
  margin: 0 0 1.5rem;
}
.info ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.25rem;
}
.info li {
  display: flex;
  gap: 0.9rem;
  align-items: center;
}
.icon {
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(102, 68, 255, 0.35);
  font-size: 1.2rem;
}
.info small {
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
}
.info a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
.info a:hover {
  color: #a48bff;
}
.form {
  background: #fff;
  border-radius: 22px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(28, 25, 72, 0.06);
  display: grid;
  gap: 1rem;
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
label {
  display: grid;
  gap: 0.4rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: #1c1948;
}
input,
select,
textarea {
  padding: 0.8rem 1rem;
  border: 1.5px solid #e2dff0;
  border-radius: 12px;
  background: #fbfaff;
  color: #1c1948;
  font-weight: 400;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
input:focus,
select:focus,
textarea:focus {
  border-color: #6644ff;
  box-shadow: 0 0 0 4px rgba(102, 68, 255, 0.12);
}
textarea {
  resize: vertical;
}
button {
  justify-self: start;
  padding: 0.85rem 1.75rem;
  border: none;
  border-radius: 999px;
  background: #6644ff;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
}
button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 68, 255, 0.4);
}
button:disabled {
  opacity: 0.7;
  cursor: wait;
}
.success {
  margin: 0;
  padding: 0.8rem 1rem;
  background: #e8fbef;
  color: #177a3c;
  border-radius: 12px;
  font-size: 0.92rem;
}
.pop-enter-active,
.pop-leave-active {
  transition: all 0.25s ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 560px) {
  .row {
    grid-template-columns: 1fr;
  }
  .info,
  .form {
    padding: 1.5rem;
  }
  button {
    justify-self: stretch;
  }
}
</style>
