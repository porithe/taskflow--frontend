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
  ADD_COLUMN = "ADD_COLUMN",
  EDIT_COLUMN_NAME = "EDIT_COLUMN_NAME",
  DELETE_COLUMN = "DELETE_COLUMN",
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK"
}

export enum ColumnGetters {
  COLUMN_LIST = "COLUMN_LIST"
}

export enum ColumnActions {
  GET_COLUMN_LIST = "GET_COLUMN_LIST",
  ADD_COLUMN = "ADD_COLUMN",
  EDIT_COLUMN_NAME = "EDIT_COLUMN_NAME",
  ADD_TASK = "ADD_TASK",
  DELETE_COLUMN = "DELETE_COLUMN",
  DELETE_TASK = "DELETE_TASK"
}

export interface RenameColumn {
  boardUuid: string;
  columnUuid: string;
  name: string;
}

export interface DeleteColumn {
  boardUuid: string;
  columnUuid: string;
}
