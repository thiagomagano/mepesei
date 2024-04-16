<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional

const { data, refresh } = await useFetch("/api/registries");

const { data: maiorPeso } = await useFetch("/api/registries/bigger");

const excluir = async (id: number) => {
  //TO DO pop up de confirmação

  console.log("Excluindo: ", id);

  await $fetch("/api/registries", {
    method: "DELETE",
    body: {
      id,
    },
  }).then(() => refresh());
};
</script>

<template>
  <div>
    <DataTable :value="data" tableStyle="min-width: 50rem">
      <template #header>
        <div
          class="flex flex-wrap align-items-center justify-content-between gap-2"
        >
          <span class="text-xl text-900 font-bold">Pessagens</span>
          <Button icon="pi pi-refresh" rounded raised />
        </div>
      </template>
      <Column field="id" header="id"></Column>
      <Column field="date" header="Data" :sortable="true"></Column>
      <Column field="weight" header="Peso" :sortable="true"></Column>
      <Column header="Exlcuir">
        <template #body="slotProps">
          <Button
            @click="excluir(slotProps.data.id)"
            icon="pi pi-trash"
            aria-label="Excluir"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
tr {
  display: flex;
  gap: 2ch;
  align-items: center;
}

table {
  display: flex;
  flex-direction: column;
  gap: 2ch;
}
</style>
