import { createStore } from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import createPersistedState from "vuex-persistedstate";
import authStore from "@/store/auth/module";

const authState = createPersistedState({
  paths: ["authStore"]
});

export default createStore({
  state: {},
  mutations,
  actions,
  modules: {
    authStore
  },
  plugins: [authState]
});
