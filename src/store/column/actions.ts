import {
  ColumnActions,
  ColumnMutations,
  DeleteColumn,
  RenameColumn
} from "@/constants/column";
import columnApi from "@/api/column";
import taskApi from "@/api/task";
import { ActionContext } from "vuex";
import { State } from "@/store/board/module";
import {
  AddTask,
  ChangeTaskPosition,
  DeleteTask,
  MoveTaskToColumn
} from "@/constants/task";

export default {
  async [ColumnActions.GET_COLUMN_LIST](
    { commit, rootState }: ActionContext<State, any>,
    boardUuid: string
  ) {
    const { data } = await columnApi.getColumnList(
      rootState.authStore.token,
      boardUuid
    );
    commit(ColumnMutations.SET_COLUMN_LIST, data);
  },
  async [ColumnActions.ADD_COLUMN](
    { commit, rootState }: ActionContext<State, any>,
    boardUuid: string
  ) {
    const { data } = await columnApi.addColumn(
      rootState.authStore.token,
      boardUuid
    );
    data.tasks = [];
    commit(ColumnMutations.ADD_COLUMN, data);
  },
  async [ColumnActions.EDIT_COLUMN_NAME](
    { commit, rootState }: ActionContext<State, any>,
    payload: RenameColumn
  ) {
    const { data } = await columnApi.renameColumn(
      rootState.authStore.token,
      payload
    );
    commit(ColumnMutations.EDIT_COLUMN_NAME, {
      columnUuid: data.uuid,
      name: data.name
    });
  },
  async [ColumnActions.ADD_TASK](
    { commit, rootState }: ActionContext<State, any>,
    payload: AddTask
  ) {
    const { data } = await taskApi.addTask(rootState.authStore.token, payload);
    commit(ColumnMutations.ADD_TASK, {
      columnUuid: data.columnUuid,
      task: data
    });
  },
  async [ColumnActions.DELETE_COLUMN](
    { commit, rootState }: ActionContext<State, any>,
    payload: DeleteColumn
  ) {
    const { data } = await columnApi.deleteColumn(
      rootState.authStore.token,
      payload
    );
    commit(ColumnMutations.DELETE_COLUMN, data.uuid);
  },
  async [ColumnActions.DELETE_TASK](
    { commit, rootState }: ActionContext<State, any>,
    payload: DeleteTask
  ) {
    const { data } = await taskApi.deleteTask(
      rootState.authStore.token,
      payload
    );
    commit(ColumnMutations.DELETE_TASK, {
      taskUuid: data.uuid,
      columnUuid: data.columnUuid
    });
  },
  async [ColumnActions.MOVE_TASK_TO_COLUMN](
    { commit, rootState }: ActionContext<State, any>,
    payload: MoveTaskToColumn
  ) {
    await taskApi.moveToColumn(rootState.authStore.token, payload);
  },
  async [ColumnActions.CHANGE_TASKS_POSITION](
    { commit, rootState }: ActionContext<State, any>,
    payload: ChangeTaskPosition
  ) {
    await taskApi.changeTaskPosition(rootState.authStore.token, payload);
  }
};
