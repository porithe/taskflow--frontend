<template>
  <Form
    class="form"
    @submit="register"
    :validation-schema="schema"
    v-slot="{ errors }"
  >
    <div
      class="form-group"
      v-for="input of Object.keys(form)"
      :key="formSettings[input].name"
    >
      <Field
        :id="formSettings[input].name"
        :name="formSettings[input].name"
        class="form-input"
        :type="formSettings[input].type"
        v-model="form[input]"
        required
      />
      <label :for="formSettings[input].name" class="form-label">{{
        formSettings[input].placeholder
      }}</label>
      <p class="form-error">{{ errors[formSettings[input].name] }}</p>
    </div>
    <button class="form-submit">register</button>
  </Form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field } from "vee-validate";
import useRegisterForm from "@/hooks/useRegisterForm";
import { FormData } from "@/constants/register";
import { useToast } from "vue-toastification";
import authApi from "@/api/auth";
import ToastMessages from "@/constants/toastMessages";
import { useRouter } from "vue-router";
import Routes from "@/constants/routes";

export default defineComponent({
  name: "RegisterForm",
  components: { Form, Field },
  setup() {
    const { form, formSettings, schema } = useRegisterForm();
    const toast = useToast();
    const router = useRouter();
    const register = async ({
      username,
      firstName,
      lastName,
      email,
      password
    }: FormData) => {
      try {
        const { status } = await authApi.register({
          username,
          firstName,
          lastName,
          email,
          password
        });
        if (status === 201) {
          toast.success(ToastMessages.USER_CREATED);
          await router.push({
            name: Routes.LOGIN
          });
        }
      } catch {
        toast.error(ToastMessages.GLOBAL_ERROR);
      }
    };
    return { form, formSettings, schema, register };
  }
});
</script>
<style lang="scss" scoped>
@import "./src/assets/styles/form";
</style>
