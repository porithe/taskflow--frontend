import mutations from "./mutations";
// import getters from "./getters";
import actions from "./actions";
import { Board } from "@/constants/board";

export interface State {
  boardList: Board[];
}

const state: State = {
  boardList: []
};

const authStore = {
  namespaced: true,
  state,
  mutations,
  // getters,
  actions
};

export default authStore;
