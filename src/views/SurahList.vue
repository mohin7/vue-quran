<template>
  <div>
    <div class="row" v-if="allSurah">
      <div class="col-lg-3 mb-4" v-for="surah in allSurah" :key="surah.id">
        <div class="card">
          <div class="card-body">
            <router-link :to="{ path: '/surah/' + parseInt(surah.index, 10) }"
              ><h5 class="card-title">
                {{ surah.title }} - {{ surah.titleAr }}
              </h5></router-link
            >
            <p class="card-text">
              Type: {{ surah.type }} <br />
              Count : {{ surah.count }}
            </p>
            <router-link
              class="btn btn-primary"
              :to="{ path: '/surah/' + parseInt(surah.index, 10) }"
              >View Surah</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SurahList",
  methods: {
    ...mapActions(["fetchSurah"]),
  },
  computed: mapGetters(["allSurah"]),
  created() {
    this.fetchSurah();
  },
};
</script>

<style lang="scss" scoped></style>
