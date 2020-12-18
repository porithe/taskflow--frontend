import axios from "axios";
import bearerToken from "@/utils/token";

export default {
  profile(token: string) {
    return axios.get(`${process.env.VUE_APP_API}profile`, {
      headers: {
        Authorization: bearerToken(token)
      }
    });
  }
};
