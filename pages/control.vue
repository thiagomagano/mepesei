<script setup lang="ts">
const { data } = await useFetch("/api/registries");
</script>

<template>
  <div>
    <h1>Listar Pessagem</h1>
    <ul v-for="item in data">
      <li>{{ item.date }} - {{ item.weight }} kg</li>
    </ul>
  </div>
</template>

<style scoped></style>
