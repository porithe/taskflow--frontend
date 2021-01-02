<template>
  <div
    class="fixed flex flex-col transform -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 bg-indigo-700 w-96 h-32 py-4 shadow-md z-50"
  >
    <p class="text-center text-gray-50 text-lg">
      Are you sure to delete
      <span class="font-bold"><slot name="delete-content"></slot></span>?
    </p>
    <div class="flex mx-12 mt-auto">
      <Button
        text="please no"
        margin-classes="ml-0"
        bg-color-class="bg-red-500"
        text-color-class="text-gray-50"
        @click="closeModal"
      />
      <slot name="delete-btn"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
export default defineComponent({
  name: "DeleteModal",
  components: { Button },
  setup(props, { emit }) {
    const closeModal = () => emit("update:isOpen", false);
    return { closeModal };
  }
});
</script>
<style lang="scss" scoped>
@import "../assets/styles/form";
</style>
