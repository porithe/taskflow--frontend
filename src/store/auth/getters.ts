import { State } from "@/store/auth/module";
import { AuthGetters } from "@/constants/auth";

export default {
  [AuthGetters.TOKEN](state: State) {
    return state.token;
  }
};
