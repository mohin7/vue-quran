<template>
  <div id="app">
    <div class="quran-nav">
      <navbar />
      <!-- <audio controls>
        <source
          src="https://raw.githubusercontent.com/semarketir/quranjson/master/source/audio/001/001.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio> -->

      <!-- https://raw.githubusercontent.com/semarketir/quranjson/master/source/translation/en/en_translation_1.json -->
    </div>
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
