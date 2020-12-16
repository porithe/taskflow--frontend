import axios from "axios";

export default {
  addBoard(token: string) {
    return axios.post(
      `${process.env.VUE_APP_API}board/add`,
      {
        name: "default board"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
};
