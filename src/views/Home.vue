<template>
  <div class="home-page d-flex justify-content-center align-items-center">
    <div class="hero-content text-center">
      <h1>The Holy Quran</h1>
      <p>Learn quran and recite once everyday</p>
      <router-link class="btn btn-primary" :to="{ path: 'surah-list' }"
        >Bimillahir Rahmanir Rahim</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
