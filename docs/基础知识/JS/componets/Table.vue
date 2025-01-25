<!-- DataTypeTable.vue -->
<template>
  <table>
    <thead>
    <tr>
      <th colspan="2">基本数据类型</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in dataTypes" :key="index">
      <td>{{ item.type }}</td>
      <td>{{ item.description }}</td>
    </tr>
    </tbody>
  </table>

</template>

<script lang="ts" setup>
const dataTypes = [
  {
    type: 'number',
    description: '数字 (整数，小数，正负数) 注：NaN也是一个number类型,代表非数字'
  },
  {
    type: 'string',
    description: '字符串'
  },
  {
    type: 'Boolean',
    description: '布尔型'
  },
  {
    type: 'undefined',
    description: '未定义类型'
  },
  {
    type: 'null',
    description: '空类型'
  }
];


</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  text-align: center;
}

th {
  background-color: #f2f2f2;
}

</style>
