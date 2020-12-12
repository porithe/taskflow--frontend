import axios from "axios";
import { FormData as RegisterFormData } from "@/constants/register";
import { FormData as LoginFormData } from "@/constants/login";

export default {
  register(userData: RegisterFormData) {
    return axios.post(`${process.env.VUE_APP_API}auth/register`, {
      ...userData
    });
  },
  login(userData: LoginFormData) {
    return axios.post(`${process.env.VUE_APP_API}auth/login`, {
      ...userData
    });
  }
};
