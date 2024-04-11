<script setup lang="ts">
const { data, refresh } = await useFetch("/api/registries");

const editRegistry = ref({
  weight: "",
  date: "",
});

const editar = async (id: number) => {
  const registry = data?.value?.find((r) => r.id === id);

  const edited = await $fetch("/api/registries", {
    method: "PUT",
    body: {
      id,
      weight: editRegistry.value.weight,
      date: editRegistry.value.date,
    },
  });
  console.log(edited);
};

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
    <h1>Lista de Pessagens</h1>
    <table>
      <tr>
        <th>Data</th>
        <th>Peso</th>
      </tr>
      <tr class="itens" v-for="item in data">
        <td>{{ item.date }}</td>
        <td>{{ item.weight }} kg's</td>
        <!-- <td>
          <Button icon="pi pi-pencil" aria-label="Editar" />
        </td> -->
        <td>
          <Button
            icon="pi pi-trash"
            aria-label="Excluir"
            @click="excluir(item.id)"
          />
        </td>
      </tr>
    </table>
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
