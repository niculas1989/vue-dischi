<template>
  <div id="generics">
    <header>
      <Navbar :albums="discs" @filter-genre="test" />
    </header>
    <main>
      <Albums :albums="discs" :filter-genre="filterChange" />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Albums from "./components/Albums.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Navbar,
    Albums,
  },
  data() {
    return {
      discs: [],
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      filterChange: "",
    };
  },
  computed: {},
  methods: {
    getAlbums() {
      axios.get(this.url).then((res) => {
        this.discs = res.data.response;
      });
    },
    test(key) {
      this.filterChange = key;
    },
  },
  mounted() {
    this.getAlbums();
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