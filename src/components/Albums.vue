<template>
  <div class="container">
    <div
      class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-3 gx-4"
    >
      <div class="col" v-for="album in listOfAlbums" :key="album.title">
        <SingleAlbum :album="album" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleAlbum from "./SingleAlbum.vue";
export default {
  name: "Albums",
  components: {
    SingleAlbum,
  },
  data() {
    return {
      listOfAlbums: [],
      url: "https://flynn.boolean.careers/exercises/api/array/music",
    };
  },
  methods: {
    getAlbums() {
      axios.get(this.url).then((res) => {
        this.listOfAlbums = res.data.response;
      });
    },
  },
  mounted() {
    this.getAlbums();
  },
};
</script>

<style scoped lang="scss">
</style>
