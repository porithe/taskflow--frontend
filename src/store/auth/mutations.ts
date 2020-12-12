import { State } from "@/store/auth/module";

export default {
  SET_TOKEN(state: State, token: string) {
    state.token = token;
  },
  REMOVE_TOKEN(state: State) {
    state.token = "";
  }
};
