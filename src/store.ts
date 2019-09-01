import Vue from "vue";
import Vuex from "vuex";
import App from "@/app/module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { App }
});
