import { TaskGetters } from "@/constants/task";
import { State } from "@/store/task/module";

export default {
  [TaskGetters.IS_MODAL_OPEN](state: State) {
    return state.isModalOpen;
  },
  [TaskGetters.COLUMN_UUID](state: State) {
    return state.columnUuid;
  }
};
