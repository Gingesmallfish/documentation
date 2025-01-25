<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">比较运算符</th>
      </tr>
      <tr>
        <th>运算符</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in dataName" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
const dataName = [
  {
    name: '>',
    description: '左边值是否大于右边'
  },
  {
    name: '<',
    description: '左边值是否小于右边'
  },
  {
    name: '>=',
    description: '左边值是否大于等于右边'
  },
  {
    name: '<=',
    description: '左边值是否小于等于右边'
  },
  {
    name: '==',
    description: '左右两数值是否相等'
  },
  {
    name: '===',
    description: '左右两边是否类型和值都相等'
  },
  {
    name: '!==',
    description: '左右两边是否不全等'
  }
]
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}
</style>
