import boardApi from "@/api/board";
import { BoardActions, BoardMutations, EditBoard } from "@/constants/board";
import { ActionContext } from "vuex";
import { State } from "@/store/board/module";

export default {
  async [BoardActions.ADD_BOARD]({
    commit,
    rootState
  }: ActionContext<State, any>) {
    const { data } = await boardApi.addBoard(rootState.authStore.token);
    commit(BoardMutations.ADD_BOARD, data);
  },
  async [BoardActions.GET_BOARD_LIST]({
    commit,
    rootState
  }: ActionContext<State, any>) {
    const { data } = await boardApi.getBoardList(rootState.authStore.token);
    commit(BoardMutations.SET_BOARD_LIST, data);
  },
  [BoardActions.SET_BOARD_NAME]({ commit }: any, name: string) {
    commit(BoardMutations.SET_BOARD_NAME, name);
  },
  async [BoardActions.GET_BOARD_INFO](
    { commit, rootState }: ActionContext<State, any>,
    boardUuid: string
  ) {
    const { data } = await boardApi.getBoard(
      rootState.authStore.token,
      boardUuid
    );
    commit(BoardMutations.SET_BOARD_NAME, data.name);
  },
  async [BoardActions.EDIT_BOARD_NAME](
    { commit, rootState }: ActionContext<State, any>,
    { boardUuid, name }: EditBoard
  ) {
    const { data } = await boardApi.editBoardName(
      boardUuid,
      name,
      rootState.authStore.token
    );
    commit(BoardMutations.SET_BOARD_NAME, data.name);
  }
};
