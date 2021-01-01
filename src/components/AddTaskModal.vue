<template>
  <teleport to="body">
    <div class="fixed w-full h-full top-0 left-0 bg-gray-900 bg-opacity-75">
      <div
        class="absolute transform -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 w-140 h-128 bg-gray-800 shadow-lg pt-24 px-20 pb-12"
        v-click-away="closeModal"
      >
        <button
          class="absolute right-2.5 top-2.5 outline-disabled"
          @click="closeModal"
        >
          <IconPlus custom-classes="transform rotate-45" />
        </button>
        <Form
          class="form"
          @submit="addTask"
          :validation-schema="schema"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <Field
              id="taskTitle"
              name="taskTitle"
              class="form-input"
              type="text"
              v-model="taskTitle"
              required
            />
            <label for="taskTitle" class="form-label">Task title</label>
            <p class="form-error w-72">{{ errors.taskTitle }}</p>
          </div>
          <div class="form-group">
            <Field
              id="taskDescription"
              name="taskDescription"
              class="form-textarea"
              v-model="taskDescription"
              as="textarea"
              required
            />
            <label for="taskDescription" class="form-label">
              Task description
            </label>
            <p class="form-error">{{ errors.taskDescription }}</p>
          </div>
          <button class="form-submit">add task</button>
        </Form>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import IconPlus from "@/assets/svg/IconPlus.vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ToastMessages from "@/constants/toastMessages";
import { ColumnActions } from "@/constants/column";
import { TaskGetters } from "@/constants/task";
import useAddTaskModal from "@/hooks/useAddTaskModal";
export default defineComponent({
  name: "AddTaskModal",
  components: { IconPlus, Form, Field },
  setup() {
    const toast = useToast();
    const store = useStore();
    const route = useRoute();
    const { closeModal } = useAddTaskModal();
    const state = reactive({
      taskTitle: "",
      taskDescription: ""
    });
    const schema = Yup.object().shape({
      taskTitle: Yup.string()
        .min(3, "Task title must be at least 3 characters")
        .required("Task title is required"),
      taskDescription: Yup.string()
        .min(6, "Task description must be at least 6 characters")
        .required("Task description is required")
    });
    const addTask = async () => {
      try {
        const taskData = {
          title: state.taskTitle,
          description: state.taskDescription,
          boardUuid: route.params.uuid,
          columnUuid: store.getters[`taskStore/${TaskGetters.COLUMN_UUID}`]
        };
        await store.dispatch(`columnStore/${ColumnActions.ADD_TASK}`, taskData);
        await closeModal();
      } catch {
        toast.error(ToastMessages.GLOBAL_ERROR);
      }
    };
    return {
      ...toRefs(state),
      closeModal,
      schema,
      addTask
    };
  }
});
</script>
<style lang="scss" scoped>
@import "./src/assets/styles/form";
.outline-disabled {
  outline: none;
}
</style>
