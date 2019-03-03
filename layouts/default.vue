<template>
  <div class="Layout">
    <header class="Header">
      <h1>TANAKAWORLD.DEV</h1>
    </header>
    <nuxt />
    <footer class="Footer">
      <div>(c) 2019 <a href="https://tanaka.world/">tanakaworld</a></div>
    </footer>
  </div>
</template>

<style scoped>
.Header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Footer {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Header,
.Footer {
  height: calc(100vh / 10);
}
</style>
