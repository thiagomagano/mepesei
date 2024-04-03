<script setup lang="ts">
// function getUltimoPeso(): string {
//   return "80,9";
// }
// const ultimoPeso = getUltimoPeso();

const peso = ref(0);

function registraPeso(): void {
  console.log(peso);
}
</script>

<template>
  <form @submit.prevent="registraPeso">
    <label for="peso">Qual seu peso hoje?</label>
    <input type="text" id="peso" :value="peso" />
    <button type="submit">Registrar</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  gap: 1rem;
}
</style>
