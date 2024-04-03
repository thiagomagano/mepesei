<script setup lang="ts">
// function getUltimoPeso(): string {
//   return "80,9";
// }
// const ultimoPeso = getUltimoPeso();

const peso = ref(80.9);

function registraPeso(): void {
  console.log(peso);
}

const dateToday = new Date(Date.now());
const hoje = dateToday.toLocaleDateString();
</script>

<template>
  <form @submit.prevent="registraPeso">
    <label for="peso"> Qual teu peso hoje? </label>
    <input
      type="number"
      id="peso"
      min="30"
      max="200"
      step="0.1"
      :value="peso"
    />

    <button type="submit">Registrar</button>
  </form>
  <span>({{ hoje }})</span>
</template>

<style scoped>
form {
  display: flex;
  gap: 1rem;
}

input {
  width: 6ch;
  padding: 0.5ch 1ch;
  font-size: 1rem;
}

input::after {
  content: " KG";
  font-size: 1rem;
  color: aqua;
  width: 1rem;
  height: 1rem;
}

span {
  font-weight: 600;
}
</style>
