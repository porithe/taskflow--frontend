import { State } from "@/store/board/module";
import { Board } from "@/constants/board";
import { BoardMutations } from "@/constants/board";

export default {
  [BoardMutations.ADD_BOARD](state: State, board: Board) {
    state.boardList = [...state.boardList, board];
  },
  [BoardMutations.SET_BOARD_LIST](state: State, boardList: Board[]) {
    state.boardList = boardList;
  }
};
