<template>
  <div class="card-disc text-center" role="button">
    <img :src="album.poster" :alt="album.author" />
    <h4 class="text-white mt-3">{{ album.title.toUpperCase() }}</h4>
    <p class="text-secondary m-0 pt-2">{{ album.author }}</p>
    <p class="text-secondary">{{ album.year }}</p>
  </div>
</template>

<script>
export default {
  name: "SingleAlbum",
  props: ["album"],
};
</script>

<style scoped>
.card-disc {
  background-color: #2e3a46;
  font-weight: bold;
  height: 400px;
  padding: 1.2rem;
}
</style>