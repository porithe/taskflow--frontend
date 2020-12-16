import AuthActions from "@/constants/authActions";
import AuthMutations from "@/constants/authMutations";
import { ActionContext } from "vuex";
import { State } from "@/store/auth/module";

export default {
  [AuthActions.LOGIN]({ commit }: ActionContext<State, State>, token: string) {
    commit(AuthMutations.SET_TOKEN, token);
  }
};
