import mutations from "@/store/auth/mutations";
import getters from "@/store/auth/getters";
import actions from "@/store/auth/actions";

export interface State {
  token: string;
}

const state: State = {
  token: ""
};

const authStore = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};

export default authStore;
