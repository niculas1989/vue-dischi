<template>
  <div class="container">
    <div
      class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-3 gx-4"
    >
      <div
        class="col"
        v-for="album in filteredAlbumsByGenre"
        :key="album.title"
      >
        <SingleAlbum :album="album" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleAlbum from "./SingleAlbum.vue";
export default {
  name: "Albums",
  props: ["albums", "filterGenre"],
  components: {
    SingleAlbum,
  },
  computed: {
    filteredAlbumsByGenre() {
      const filter = this.filterGenre;
      return this.albums.filter((album) => {
        if (album.genre == filter || filter == "ALL" || filter == "")
          return true;
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
