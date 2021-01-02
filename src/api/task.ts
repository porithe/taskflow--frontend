import axios from "axios";
import { AddTask, DeleteTask } from "@/constants/task";
import bearerToken from "@/utils/token";

export default {
  addTask(
    token: string,
    { boardUuid, title, columnUuid, description }: AddTask
  ) {
    return axios.post(
      `${process.env.VUE_APP_API}task/add`,
      {
        boardUuid,
        title,
        columnUuid,
        description
      },
      {
        headers: {
          Authorization: bearerToken(token)
        }
      }
    );
  },
  deleteTask(token: string, { boardUuid, taskUuid }: DeleteTask) {
    return axios.delete(`${process.env.VUE_APP_API}task/delete`, {
      data: {
        boardUuid,
        taskUuid
      },
      headers: {
        Authorization: bearerToken(token)
      }
    });
  }
};
