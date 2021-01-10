import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import { Board } from "@/constants/board";
import { Column } from "@/constants/column";

export interface State {
  boardList: Board[];
  board: {
    name: string;
    columns: Column[] | null;
  };
}

const state: State = {
  boardList: [],
  board: {
    name: "",
    columns: []
  }
};

const authStore = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};

export default authStore;
