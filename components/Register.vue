<script setup lang="ts">
import InputNumber from "primevue/inputnumber";

// function getUltimoPeso(): string {
//   return "80,9";
// }
// const ultimoPeso = getUltimoPeso();

const peso = ref(80.9);

async function registrarPeso() {
  const registry = await $fetch("/api/registries", {
    method: "POST",
    body: {
      weight: peso.value,
    },
  });

  return registry;
}

// const dateToday = new Date(Date.now());
// const hoje = dateToday.toLocaleDateString();
</script>

<template>
  <div>
    <h1>Bora Gordão!</h1>
    <form @submit.prevent="registrarPeso">
      <div class="group">
        <label for="peso"> Qual teu peso hoje?</label>
        <InputNumber
          v-model="peso"
          inputId="horizontal-buttons"
          showButtons
          buttonLayout="horizontal"
          :step="0.1"
          :min="50"
          :max="100"
        >
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
      </div>

      <Button
        aria-label="Registrar"
        label="Registrar"
        icon="pi pi-check"
        iconPos="right"
        type="submit"
      />
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-items: center;
}

div.group {
  display: flex;
  flex-direction: column;
  gap: 2ch;
}
</style>
