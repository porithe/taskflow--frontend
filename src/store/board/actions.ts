import boardApi from "@/api/board";
import BoardMutations from "@/constants/boardMutations";

export default {
  async [BoardMutations.ADD_BOARD]({ commit, rootState }: any) {
    const { data } = await boardApi.addBoard(rootState.authStore.token);
    commit(BoardMutations.ADD_BOARD, data);
  }
};
