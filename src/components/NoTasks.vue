<template>
  <div
    class="flex-grow border-dashed border-2 border-gray-500 h-24 flex flex-col items-center justify-center"
  >
    <p class="mb-2 text-gray-50 font-medium font-base">No tasks yet</p>
    <button class="text-yellow-400 font-base font-medium">Add one</button>
  </div>
  <AddTaskModal />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AddTaskModal from "@/components/AddTaskModal.vue";
export default defineComponent({
  name: "NoTasks",
  components: { AddTaskModal }
});
</script>
