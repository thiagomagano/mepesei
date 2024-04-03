<script setup lang="ts">
const name = "Thi";
const hoje = new Date(Date.now());
</script>

<template>
  <main>
    <div>
      <h1>
        Bora Gordão! Qual teu peso hoje?
        <span> ({{ hoje.toLocaleDateString() }}) </span>
      </h1>
      <Register />
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: salmon;
  color: white;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 95svh;
  margin: 0;
  display: grid;
  place-items: center;
}

h1 {
  font-size: 48px;
  text-align: center;
  font-family: serif;
}

span {
  text-decoration: underline;
}
</style>
