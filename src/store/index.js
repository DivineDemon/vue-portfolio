import { createStore } from "vuex";
import { vuexLocal } from "@/plugins/persist";

export default createStore({
  state: {
    darkMode: false,
    experience: [],
    appInfo: [],
    repoInfo: [],
  },
  getters: {
    getDarkMode(state) {
      return state.darkMode;
    },
    getExperience(state) {
      return state.experience;
    },
    getAppInfo(state) {
      return state.appInfo;
    },
    getRepoInfo(state) {
      return state.repoInfo;
    },
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload;
    },
    setExperience(state, payload) {
      state.experience = payload;
    },
    setAppInfo(state, payload) {
      state.appInfo = payload;
    },
    setRepoInfo(state, payload) {
      state.repoInfo = payload;
    },
  },
  actions: {
    async fetchExperience({ commit }) {
      const response = await fetch(
        `${process.env.VUE_APP_BASE_URL}/experience`
      );
      const data = await response.json();
      commit("setExperience", data.response);
    },
    async fetchAppInfo({ commit }) {
      const response = await fetch(`${process.env.VUE_APP_BASE_URL}/app-info`);
      const data = await response.json();
      commit("setAppInfo", data.response);
    },
    async fetchRepoInfo({ commit }) {
      const response = await fetch(`${process.env.VUE_APP_BASE_URL}/repo-info`);
      const data = await response.json();
      commit("setRepoInfo", data.response);
    },
  },
  plugins: [vuexLocal.plugin],
});
