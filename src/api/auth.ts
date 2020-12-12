import axios from "axios";
import { FormData } from "@/constants/register";

export default {
  register(userData: FormData) {
    return axios.post(`${process.env.VUE_APP_API}auth/register`, {
      ...userData
    });
  }
};
