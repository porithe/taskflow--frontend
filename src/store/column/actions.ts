import {
  ColumnActions,
  ColumnMutations,
  RenameColumn
} from "@/constants/column";
import columnApi from "@/api/column";
import { ActionContext } from "vuex";
import { State } from "@/store/board/module";

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
  }
};
