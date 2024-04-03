<template>
  <footer>
    <div>
      Desenvolvido com ❤️ por
      <a href="https://thiagomagano.com.br" _blank> Thiago Magano </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: grid;
  place-items: center;
  height: 3svh;
  grid-auto-flow: column;
}

a {
  text-decoration: none;
  color: white;
  font-weight: 500;
}

a:hover,
a:focus {
  text-decoration: underline;
}
</style>
