import { State } from "@/store/auth/module";

export default {
  token(state: State) {
    return state.token;
  }
};
