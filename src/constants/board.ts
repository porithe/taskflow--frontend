export interface Board {
  uuid: string;
  name: string;
}

export enum BoardGetters {
  BOARD_LIST = "BOARD_LIST"
}

export enum BoardActions {
  ADD_BOARD = "ADD_BOARD",
  GET_BOARD_LIST = "GET_BOARD_LIST"
}

export enum BoardMutations {
  ADD_BOARD = "ADD_BOARD",
  SET_BOARD_LIST = "SET_BOARD_LIST"
}
