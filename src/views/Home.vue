<template>
  <q-page class="q-mt-lg">

    <!-- Banner 1 -->
    <div class="banner-container">
      <q-img
        src="~assets/banner1.png"
        alt="Banner 1"
        class="banner-img"
        :ratio="3840 / 842"
        fit="cover"
      />
    </div>

    <!-- Marcas -->
    <div class="flex flex-center q-my-lg">
      <q-img
        src="~assets/marcas.png"
        alt="Marcas"
        style="width: 100%; max-width: 1300px; min-width: 300px; height: auto; object-fit: contain;"
      />
    </div>

    <!-- Banner 2 -->
    <div class="banner-container q-mb-xl">
      <q-img
        src="~assets/banner2.png"
        alt="Banner 2"
        class="banner-img"
        :ratio="3840 / 842"
        fit="cover"
      />
    </div>

  </q-page>
</template>

<script lang="ts">
export default {
  name: 'Home'
}
</script>

<style scoped>
.banner-container {
  width: 100vw; /* força largura total da viewport */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}
.banner-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
</style>
