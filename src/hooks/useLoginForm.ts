import { reactive } from "vue";
import * as Yup from "yup";

export const useLoginForm = () => {
  const form = reactive({
    username: "",
    password: ""
  });
  const formSettings = {
    username: {
      name: "username",
      placeholder: "Username",
      type: "text"
    },
    password: {
      name: "password",
      placeholder: "Password",
      type: "password"
    }
  };
  const schema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be at least 6 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 8 characters")
      .required("Password is required")
  });
  return { form, formSettings, schema };
};
