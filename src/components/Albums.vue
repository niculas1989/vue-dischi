<template>
  <div id="albums"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Albums",
  data() {
    return {
      listOfAlbums: [],
    };
  },
  methods: {
    getAlbums() {
      axios.get("qualcosa").then((res) => {
        this.listOfAlbums = res;
      });
    },
  },
};
</script>

<style scoped lang="scss">
#albums {
  background-color: #1e2d3b;
  height: 100%;
}
</style>