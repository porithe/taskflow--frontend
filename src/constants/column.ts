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
