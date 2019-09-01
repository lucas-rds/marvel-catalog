import Vuex from "vuex";
import Vue from "vue";
import Vuetify from "vuetify";
import Router from "vue-router";
import { createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);

export const createVue = () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(Vuetify);
  return localVue;
};
