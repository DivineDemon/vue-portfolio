import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
  },
  getters: {
    getDarkMode(state) {
      return state.darkMode;
    },
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload;
    },
  },
  actions: {},
  modules: {},
});
