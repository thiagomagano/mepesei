<template>
  <header>
    <span id="logo">Me Pesei</span>
    <ul>
      <li><a href="/">Registrar </a></li>
      <li><a href="/control"> Controle</a></li>
    </ul>
  </header>
</template>

<style>
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
  text-decoration: underline;
  font-weight: bold;
}

a:visited {
  font-weight: bold;
  color: white;
}

span#logo {
  font-size: 2rem;
  font-weight: 700;
}
</style>
