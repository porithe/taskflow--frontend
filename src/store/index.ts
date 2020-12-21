import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import authStore from "@/store/auth/module";
import boardStore from "@/store/board/module";
import columnStore from "@/store/column/module";

const authState = createPersistedState({
  paths: ["authStore"]
});

export default createStore({
  modules: {
    authStore,
    boardStore,
    columnStore
  },
  plugins: [authState]
});
