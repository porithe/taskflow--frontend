<template>
  <li class="w-96 bg-gray-700 h-32 shadow-xl py-2 px-3 relative mb-5">
    <p class="text-gray-300 text-lg font-medium">{{ taskData.title }}</p>
    <p
      class="text-gray-400 text-base overflow-ellipsis whitespace-nowrap overflow-hidden"
    >
      {{ taskData.description }}
    </p>
    <button class="absolute bottom-0.5 right-3">
      <IconDots />
    </button>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconDots from "@/assets/svg/IconDots.vue";
export default defineComponent({
  name: "Task",
  components: { IconDots },
  props: {
    taskData: {
      type: Object,
      required: true
    }
  }
});
</script>
