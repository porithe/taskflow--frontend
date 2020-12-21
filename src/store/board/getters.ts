import { State } from "@/store/board/module";
import { BoardGetters } from "@/constants/board";

export default {
  [BoardGetters.BOARD_LIST](state: State) {
    return state.boardList;
  },
  [BoardGetters.BOARD_NAME](state: State) {
    return state.board.name;
  }
};
