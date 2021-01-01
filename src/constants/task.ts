import Status from "@/constants/status";

export interface Task {
  uuid: string;
  author: string;
  title: string;
  description: string;
  position: number;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  columnUuid: string;
}

export interface AddTask {
  boardUuid: string;
  title: string;
  columnUuid: string;
  description: string;
}

export interface PushTask {
  task: Task;
  columnUuid: string;
}

export enum TaskMutations {
  SET_IS_MODAL_OPEN = "SET_IS_MODAL_OPEN",
  SET_COLUMN_UUID = "SET_COLUMN_UUID"
}

export enum TaskActions {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL"
}

export enum TaskGetters {
  IS_MODAL_OPEN = "IS_MODAL_OPEN",
  COLUMN_UUID = "COLUMN_UUID"
}
