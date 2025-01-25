<template>
  <div class="timeline">
    <h2>时间线</h2>
    <ul>
      <li v-for="event in events" :key="event.date">
        <strong>{{ event.date }}</strong>: {{ event.description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getTimelineEvents } from '../services/FileService';

const events = ref<{ date: string; description: string }[]>([]);

onMounted(async () => {
  events.value = await getTimelineEvents();
});
</script>

<style>
.timeline {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}
.timeline ul {
  list-style: none;
  padding: 0;
}
.timeline li {
  margin-bottom: 10px;
}
</style>
