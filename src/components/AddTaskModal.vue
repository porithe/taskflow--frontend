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
        <form class="form">
          <div class="form-group">
            <input
              id="taskTitle"
              name="taskTitle"
              class="form-input"
              type="text"
              v-model="taskTitle"
              required
            />
            <label for="taskTitle" class="form-label">Task title</label>
          </div>
          <div class="form-group">
            <textarea
              id="taskDescription"
              name="taskDescription"
              class="form-textarea"
              v-model="taskDescription"
              required
            />
            <label for="taskDescription" class="form-label">
              Task description
            </label>
          </div>
          <button class="form-submit">add task</button>
        </form>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import IconPlus from "@/assets/svg/IconPlus.vue";
export default defineComponent({
  name: "AddTaskModal",
  components: { IconPlus },
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      taskTitle: "",
      taskDescription: ""
    });
    const closeModal = () => emit("update:isModalOpen", false);
    return {
      ...toRefs(state),
      closeModal
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
