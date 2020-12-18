import boardApi from "@/api/board";
import { BoardActions, BoardMutations } from "@/constants/board";
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
  }
};
