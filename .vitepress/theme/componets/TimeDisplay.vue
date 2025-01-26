<template>
  <div class="time">
     <span>{{ currentTime }}</span>
  </div>

</template>

<script lang="ts" setup>

import {onMounted, onUnmounted, ref} from "vue";

let time;

const currentTime = ref(new Date().toLocaleTimeString())


onMounted(() => {
  time = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(time)
})



</script>

<style scoped>
.time{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px 8px; /* 添加内边距 */
  border-radius: 4px; /* 添加圆角 */
  transition: color 0.3s ease; /* 添加过渡效果 */
  margin-top: 4px;
}

.time:hover{
  color: #3451b2; /* 修改悬停颜色 */
}
.time span{
  font-size: 18px;
  color: #999;
}
</style>
