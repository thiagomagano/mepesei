<template>
  <header>
    <span id="logo">Me Pesei</span>
    <ul>
      <li><NuxtLink href="/">Registrar </NuxtLink></li>
      <li><NuxtLink href="/control"> Controle</NuxtLink></li>
    </ul>
  </header>
</template>

<style scoped>
header {
  display: grid;
  place-items: center;
  height: 3svh;
  grid-auto-flow: column;
  padding-top: 1rem;
}

ul {
  display: flex;
  gap: 2ch;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  font-weight: 500;
}
a:hover {
  text-decoration: underline;
}

span#logo {
  font-size: 2rem;
  font-weight: 700;
}
</style>
