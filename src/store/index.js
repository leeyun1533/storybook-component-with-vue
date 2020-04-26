import Vue from "vue";
import Vuex from "vuex";
import input from "./modules/input";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const plugins = [
  createPersistedState({
    path: ["input"]
  })
];
const store = new Vuex.Store({
  modules: {
    input
  },
  plugins
});

export default store;
