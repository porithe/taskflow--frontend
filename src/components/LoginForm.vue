<template>
  <Form
    class="form"
    @submit="login"
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
    <Button text="login" />
  </Form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field } from "vee-validate";
import useLoginForm from "@/hooks/useLoginForm";
import { FormData } from "@/constants/login";
import { useToast } from "vue-toastification";
import authApi from "@/api/auth";
import ToastMessages from "@/constants/toastMessages";
import { useRouter } from "vue-router";
import Routes from "@/constants/routes";
import { useStore } from "vuex";
import { AuthActions } from "@/constants/auth";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "LoginForm",
  components: { Form, Field, Button },
  setup() {
    const { form, formSettings, schema } = useLoginForm();
    const toast = useToast();
    const router = useRouter();
    const store = useStore();
    const login = async ({ username, password }: FormData) => {
      try {
        const { data } = await authApi.login({ username, password });
        await store.dispatch(
          `authStore/${AuthActions.LOGIN}`,
          data.accessToken
        );
        await router.push({
          name: Routes.PROFILE
        });
      } catch ({ response }) {
        if (response.status === 401) {
          toast.error(ToastMessages.UNAUTHORIZED);
        } else if (response.status === 404) {
          toast.error(ToastMessages.USER_NOT_FOUND);
        } else {
          toast.error(ToastMessages.GLOBAL_ERROR);
        }
      }
    };
    return { form, formSettings, schema, login };
  }
});
</script>
<style lang="scss" scoped>
@import "./src/assets/styles/form";
</style>
