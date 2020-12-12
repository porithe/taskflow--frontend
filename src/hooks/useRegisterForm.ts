import { reactive } from "vue";
import * as Yup from "yup";

const useRegisterForm = () => {
  const form = reactive({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const formSettings = {
    username: {
      name: "username",
      placeholder: "Username",
      type: "text"
    },
    firstName: {
      name: "firstName",
      placeholder: "First name",
      type: "text"
    },
    lastName: {
      name: "lastName",
      placeholder: "Last name",
      type: "text"
    },
    email: {
      name: "email",
      placeholder: "Email",
      type: "email"
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
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email()
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 8 characters")
      .required("Password is required")
  });
  return { form, formSettings, schema };
};

export default useRegisterForm;
