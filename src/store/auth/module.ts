import mutations from "@/store/auth/mutations";
import getters from "@/store/auth/getters";

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
  getters
};

export default authStore;
