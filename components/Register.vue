<script setup lang="ts">
import InputNumber from "primevue/inputnumber";

const props = defineProps(["lastWeight"]);

const dateToday = computed(() =>
  new Date(Date.now()).toLocaleDateString("pt-BR")
);
const weight = ref(props.lastWeight);

const submit = async () => {
  try {
    const response = await $fetch("/api/registries", {
      method: "POST",
      body: {
        weight: weight.value,
        date: dateToday.value,
      },
    });
    return registry;
  } catch (err) {
    console.log(err.status);
  }
};
</script>

<template>
  <div>
    <h1>Bora Gordão!</h1>

    <form @submit.prevent="submit">
      <div class="group">
        <label for="weight"> Qual teu weight hoje? {{ dateToday }}</label>
        <InputNumber
          v-model="weight"
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
