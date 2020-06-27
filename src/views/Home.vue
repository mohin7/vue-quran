<template>
  <div>
    <div class="row align-items-center">
      <div class="col-lg-8">
        <h2>Holy Quran</h2>
        <router-link :to="{ path: 'surah-list' }">List Of Surah</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
