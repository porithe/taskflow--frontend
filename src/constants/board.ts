export interface Board {
  uuid: string;
  name: string;
}

export enum BoardGetters {
  BOARD_LIST = "BOARD_LIST",
  BOARD_NAME = "BOARD_NAME"
}

export enum BoardActions {
  ADD_BOARD = "ADD_BOARD",
  GET_BOARD_LIST = "GET_BOARD_LIST",
  SET_BOARD_NAME = "SET_BOARD_NAME",
  EDIT_BOARD_NAME = "EDIT_BOARD_NAME",
  GET_BOARD_INFO = "GET_BOARD_INFO"
}

export enum BoardMutations {
  ADD_BOARD = "ADD_BOARD",
  SET_BOARD_LIST = "SET_BOARD_LIST",
  SET_BOARD_NAME = "SET_BOARD_NAME"
}
