<!-- CustomFooter.vue -->
<template>
  <footer>
    <p>{{ copyright }}</p>
    <p>当前日期: {{ currentDate }}</p>
  </footer>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const copyright = ''
const currentDate = ref(new Date().toLocaleDateString('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}))

onMounted(() => {
  // 可以在这里添加定时更新日期的逻辑，如果需要
})
</script>

<style scoped>
footer {
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-top: 1px solid #ddd;
}

p {
  margin: 5px 0;
}
</style>
