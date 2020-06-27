<template>
  <div class="text-right">
    <h3>{{ surah.name }}({{ surah.count }})</h3>

    <ul class="list-group">
      <li
        class="list-group-item disabled"
        v-for="(vers, idx) in surah.verse"
        :key="vers"
      >
        ({{ idx }})-{{ vers }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      surah: {},
    };
  },
  created() {
    this.fetchSurah();
  },
  methods: {
    async fetchSurah() {
      const response = await axios.get(
        `https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${this.$route.params.id}.json`
      );
      this.surah = response.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
