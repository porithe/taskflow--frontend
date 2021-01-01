import axios from "axios";
import { AddTask } from "@/constants/task";
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
  }
};
