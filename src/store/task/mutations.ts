import { TaskMutations } from "@/constants/task";
import { State } from "@/store/task/module";

export default {
  [TaskMutations.SET_IS_MODAL_OPEN](state: State, isModalOpen: boolean) {
    state.isModalOpen = isModalOpen;
  },
  [TaskMutations.SET_COLUMN_UUID](state: State, columnUuid: string) {
    state.columnUuid = columnUuid;
  }
};
