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
  getBoardList(token: string) {
    return axios.get(`${process.env.VUE_APP_API}board/getAll`, {
      headers: {
        Authorization: bearerToken(token)
      }
    });
  }
};
