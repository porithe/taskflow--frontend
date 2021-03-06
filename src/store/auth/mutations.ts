import { State } from "@/store/auth/module";
import { AuthMutations } from "@/constants/auth";

export default {
  [AuthMutations.SET_TOKEN](state: State, token: string) {
    state.token = token;
  },
  [AuthMutations.REMOVE_TOKEN](state: State) {
    state.token = "";
  }
};
