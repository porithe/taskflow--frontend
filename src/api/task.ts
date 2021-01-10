import axios from "axios";
import {
  AddTask,
  ChangeTaskPosition,
  DeleteTask,
  MoveTaskToColumn
} from "@/constants/task";
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
  },
  moveToColumn(
    token: string,
    {
      boardUuid,
      taskUuid,
      columnUuid,
      newPosition,
      currentColumnUuid,
      oldPosition
    }: MoveTaskToColumn
  ) {
    return axios.post(
      `${process.env.VUE_APP_API}task/updateRelation`,
      {
        boardUuid,
        taskUuid,
        columnUuid,
        newPosition,
        oldPosition,
        currentColumnUuid
      },
      {
        headers: {
          Authorization: bearerToken(token)
        }
      }
    );
  },
  changeTaskPosition(
    token: string,
    {
      boardUuid,
      taskUuid,
      newPosition,
      oldPosition,
      columnUuid
    }: ChangeTaskPosition
  ) {
    return axios.post(
      `${process.env.VUE_APP_API}task/moveTask`,
      {
        boardUuid,
        taskUuid,
        newPosition,
        oldPosition,
        columnUuid
      },
      {
        headers: {
          Authorization: bearerToken(token)
        }
      }
    );
  }
};
