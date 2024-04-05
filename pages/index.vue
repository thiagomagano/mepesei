<script setup lang="ts">
const {
  data: registries,
  pending,
  error,
} = await useFetch("/api/registries/last");

const today = ref(new Date(Date.now()).toLocaleDateString("pt-BR"));

function calcStreak(last: any): boolean {
  //debug
  console.log("last: ", last, "today: ", today.value);

  return last === today.value;
}

const isRegistryToday = computed(() => calcStreak(registries.value?.date));
</script>

<template>
  <p v-if="pending">Fetching...</p>
  <pre v-else-if="error">Could not load quote: {{ error.data }}</pre>
  <div v-else>
    <div>
      <h1>Voce já registrou seu peso hoje!</h1>
      <p>
        O Registro com peso de
        {{ registries?.weight }} Kg's
      </p>
    </div>
    <div>
      <Register :last-weight="registries?.weight" />
    </div>
  </div>
</template>
