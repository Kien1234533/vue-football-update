import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false, // Mặc định là chế độ sáng
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
  actions: {
    toggleDarkMode(context) {
      context.commit("toggleDarkMode");
    },
  },
});
