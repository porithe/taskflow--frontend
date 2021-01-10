<template>
  <div
    class="flex-grow border-dashed border-2 border-gray-500 h-24 flex flex-col items-center justify-center"
  >
    <p class="mb-2 text-gray-50 font-medium font-base">No tasks yet</p>
    <button
      class="text-yellow-400 font-base font-medium"
      @click="openModal(columnUuid)"
    >
      Add one
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useAddTaskModal from "@/hooks/useAddTaskModal";
export default defineComponent({
  name: "NoTasks",
  props: {
    columnUuid: {
      type: String,
      required: true
    }
  },
  setup() {
    const { openModal } = useAddTaskModal();
    return {
      openModal
    };
  }
});
</script>
