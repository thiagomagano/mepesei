<script setup lang="ts">
const {
  data: registries,
  pending,
  error,
} = await useFetch("/api/registries/last");

const today = ref(new Date(Date.now()).toLocaleDateString("pt-BR"));

const isRegistryToday = ref(registries.value?.date === today.value);
</script>

<template>
  <p v-if="pending">Fetching...</p>
  <pre v-else-if="error">Could not load quote: {{ error.data }}</pre>
  <div v-else>
    <div v-if="isRegistryToday">
      <h1>Voce já registrou seu peso hoje!</h1>
      <p>
        O Registro com peso de
        {{ registries?.weight }} Kg's
      </p>
    </div>
    <div v-else>
      <Register :last-weight="registries?.weight" />
    </div>
  </div>
</template>
