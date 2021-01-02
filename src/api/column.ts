import axios from "axios";
import bearerToken from "@/utils/token";
import { DeleteColumn, RenameColumn } from "@/constants/column";

export default {
  getColumnList(token: string, boardUuid: string) {
    return axios.get(
      `${process.env.VUE_APP_API}column/getAll/${boardUuid}/ACTIVE`,
      {
        headers: {
          Authorization: bearerToken(token)
        }
      }
    );
  },
  addColumn(token: string, boardUuid: string) {
    return axios.post(
      `${process.env.VUE_APP_API}column/add`,
      {
        boardUuid,
        name: "default column"
      },
      {
        headers: {
          Authorization: bearerToken(token)
        }
      }
    );
  },
  renameColumn(token: string, { boardUuid, columnUuid, name }: RenameColumn) {
    return axios.put(
      `${process.env.VUE_APP_API}column/rename`,
      {
        boardUuid,
        columnUuid,
        name
      },
      {
        headers: {
          Authorization: bearerToken(token)
        }
      }
    );
  },
  deleteColumn(token: string, { boardUuid, columnUuid }: DeleteColumn) {
    return axios.delete(`${process.env.VUE_APP_API}column/delete`, {
      data: {
        boardUuid,
        columnUuid
      },
      headers: {
        Authorization: bearerToken(token)
      }
    });
  }
};
