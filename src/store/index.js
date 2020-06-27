import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Surah: [],
  },
  getters: {
    allSurah: (state) => state.Surah,
  },
  actions: {
    async fetchSurah({ commit }) {
      const response = await axios.get(
        `https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json`
      );
      commit("setSurah", response.data);
    },
  },
  mutations: {
    setSurah: (state, surah) => {
      state.Surah = surah;
    },
  },
  modules: {},
});
