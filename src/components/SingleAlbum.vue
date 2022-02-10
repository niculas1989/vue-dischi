<template>
  <div
    class="
      single-album
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <img :src="album.poster" :alt="album.poster" />
    <span class="title">{{ album.title }}</span>
    <span class="text-muted">{{ album.author }}</span>
    <span class="text-muted">{{ album.year }}</span>
  </div>
</template>

<script>
export default {
  name: "SingleAlbum",
  props: ["album"],
};
</script>

<style scoped>
.single-album {
  width: 80%;
  background-color: rgba(#0000, 0.5);
}

img {
  height: 150px;
  width: 150px;
}

.title {
  font-size: 1.4rem;
  color: white;
}
</style>