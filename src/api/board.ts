import axios from "axios";
import bearerToken from "@/utils/token";

export default {
  addBoard(token: string) {
    return axios.post(
      `${process.env.VUE_APP_API}board/add`,
      {
        name: "default board"
      },
      {
        headers: {
          Authorization: bearerToken(token)
        }
      }
    );
  },
  getBoard(token: string, uuid: string) {
    return axios.get(`${process.env.VUE_APP_API}board/${uuid}`, {
      headers: {
        Authorization: bearerToken(token)
      }
    });
  },
  getBoardList(token: string) {
    return axios.get(`${process.env.VUE_APP_API}board/getAll`, {
      headers: {
        Authorization: bearerToken(token)
      }
    });
  },
  editBoardName(boardUuid: string, name: string, token: string) {
    return axios.put(
      `${process.env.VUE_APP_API}board/rename`,
      {
        boardUuid,
        name
      },
      {
        headers: {
          Authorization: bearerToken(token)
        }
      }
    );
  }
};
