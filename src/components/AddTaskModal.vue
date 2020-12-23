<template>
  <teleport to="body">
    <div class="fixed w-full h-full top-0 left-0 bg-gray-900 bg-opacity-50">
      <div
        class="absolute transform -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 w-140 h-128 bg-gray-800 shadow-lg pt-24 px-20 pb-12"
      >
        <button class="absolute right-2.5 top-2.5 transform rotate-45">
          <IconPlus />
        </button>
        <form class="form">
          <div class="form-group">
            <input
              id="taskName"
              name="taskName"
              class="form-input"
              type="text"
              v-model="taskName"
              required
            />
            <label for="taskName" class="form-label">Task name</label>
          </div>
          <div class="form-group">
            <textarea
              id="taskDescription"
              name="taskDescription"
              class="form-textarea"
              v-model="taskDescription"
              required
            />
            <label for="taskDescription" class="form-label">Task name</label>
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
  setup() {
    const state = reactive({
      taskName: "",
      taskDescription: ""
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>
<style lang="scss" scoped>
@import "./src/assets/styles/form";
</style>
