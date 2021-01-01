import { TaskActions, TaskMutations } from "@/constants/task";
import { ActionContext } from "vuex";
import { State } from "@/store/task/module";

export default {
  [TaskActions.OPEN_MODAL](
    { commit }: ActionContext<State, any>,
    columnUuid: string
  ) {
    commit(TaskMutations.SET_IS_MODAL_OPEN, true);
    commit(TaskMutations.SET_COLUMN_UUID, columnUuid);
  },
  [TaskActions.CLOSE_MODAL]({ commit }: ActionContext<State, any>) {
    commit(TaskMutations.SET_IS_MODAL_OPEN, false);
  }
};
