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
