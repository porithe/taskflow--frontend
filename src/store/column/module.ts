import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import { Column } from "@/constants/column";

export interface State {
  columnList: Column[];
}

const state: State = {
  columnList: []
};

const authStore = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};

export default authStore;
