import { Module } from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import IAppState from "@/models/AppState";

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  modules: {}
} as Module<IAppState, any>;
