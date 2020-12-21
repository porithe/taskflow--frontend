import Status from "@/constants/status";
import { Task } from "@/constants/task";

export interface Column {
  uuid: string;
  name: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  boardUuid: string;
  tasks: Task[];
}

export enum ColumnMutations {
  SET_COLUMN_LIST = "SET_COLUMN_LIST",
  ADD_COLUMN = "ADD_COLUMN"
}

export enum ColumnGetters {
  COLUMN_LIST = "COLUMN_LIST"
}

export enum ColumnActions {
  GET_COLUMN_LIST = "GET_COLUMN_LIST",
  ADD_COLUMN = "ADD_COLUMN"
}
