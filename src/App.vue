<template>
  <div id="generics">
    <header>
      <Navbar />
    </header>
    <main>
      <Albums />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Albums from "./components/Albums.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Albums,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
body {
  background-color: #1e2d3b;
}
img {
  max-width: 100%;
}
</style>
