<template>
  <div class="priority-table">
    <table>
      <thead>
        <tr>
          <th>优先级</th>
          <th>运算符</th>
          <th>顺序</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="operator in operators" :key="operator.priority">
          <td>{{ operator.priority }}</td>
          <td>{{ operator.symbol }}</td>
          <td>{{ operator.order }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 定义运算符及其优先级
const operators = ref([
  { priority: 1, symbol: '小括号', order: '()' },
  { priority: 2, symbol: '一元运算符', order: '++ -- !' },
  { priority: 3, symbol: '算数运算符', order: '先 * / % 后 + -' },
  { priority: 4, symbol: '关系运算符', order: '> >= < <=' },
  { priority: 5, symbol: '相等运算符', order: '== != === !==' },
  { priority: 6, symbol: '逻辑运算符', order: '先 && 后 ||' },
  { priority: 7, symbol: '赋值运算符', order: '=' },
  { priority: 8, symbol: '逗号运算符', order: ',' }
]);
</script>

<style scoped>
.priority-table {
  margin: 20px auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: center;
}

</style>
