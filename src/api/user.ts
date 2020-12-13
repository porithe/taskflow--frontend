import axios from "axios";

export default {
  profile(token: string) {
    return axios.get(`${process.env.VUE_APP_API}profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};
