import axios from "axios";
import bearerToken from "@/utils/token";

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
  }
};
