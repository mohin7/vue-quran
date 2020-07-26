<template>
  <div>
    <section class="surah-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <router-link class="back-button" title="Back" :to="{ path: '/' }"
              ><svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-left"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                /></svg
            ></router-link>
            <h4>Al-Pathea</h4>
            <p>The opening</p>
            <div class="divider"></div>
            <p class="place">Maccain - 7 Verses</p>
            <h1>Bismillah Arabiya</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="surah-list-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="surah-list">
              <!-- single surah start  -->
              <div
                class="single-surah"
                v-for="(surah, idx) in allSurah"
                :key="surah.id"
              >
                <div class="surah-leftside">
                  <div class="ayat">{{ idx + 1 }}</div>
                  <div class="surah-name">
                    <h3>{{ surah.title }}</h3>
                    <p>{{ surah.type }} - {{ surah.count }} Verses</p>
                  </div>
                </div>
                <div class="surah-righside">
                  <h4>{{ surah.titleAr }}</h4>
                </div>
              </div>
              <!-- single surah end -->
            </div>
          </div>
          <div class="col-lg-9">
            {{  }}
          </div>
        </div>
      </div>
    </section>

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
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SurahList",
  data() {
    return {
      surah: [],
      activeSurah: this.surah,
    };
  },
  methods: {
    ...mapActions(["fetchSurah"]),
    async fetchSingleSurah() {
      for (let i = 1; i <=114; i++) {
        const response = await axios.get(
          `https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${i}.json`
        );
      this.surah = response.data;
      }

    },
  },
  computed: mapGetters(["allSurah"]),
  created() {
    this.fetchSurah();
    this.fetchSingleSurah();
  },
};
</script>
