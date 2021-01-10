import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export interface State {
  isModalOpen: boolean;
  columnUuid: string;
}

const state: State = {
  isModalOpen: false,
  columnUuid: ""
};

const authStore = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};

export default authStore;
