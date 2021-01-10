<template>
  <li class="w-96 bg-gray-700 h-32 shadow-xl py-2 px-3 relative mb-5">
    <p class="text-gray-300 text-lg font-medium">{{ taskData.title }}</p>
    <p
      class="text-gray-400 text-base overflow-ellipsis whitespace-nowrap overflow-hidden"
    >
      {{ taskData.description }}
    </p>
    <button class="absolute bottom-2 right-2" @click="openDeleteModal">
      <IconPlusSmall custom-classes="transform rotate-45" />
    </button>
  </li>
  <DeleteModal v-if="isDeleteModalOpen" v-model:isOpen="isDeleteModalOpen">
    <template #delete-content>task</template>
    <template #delete-btn>
      <Button text="delete" @click="deleteTask(taskData.uuid)" />
    </template>
  </DeleteModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconPlusSmall from "@/assets/svg/IconPlusSmall.vue";
import DeleteModal from "@/components/DeleteModal.vue";
import useDeleteModal from "@/hooks/useDeleteModal";
import useTask from "@/hooks/useTask";
import Button from "@/components/Button.vue";
export default defineComponent({
  name: "Task",
  components: { IconPlusSmall, DeleteModal, Button },
  props: {
    taskData: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { isDeleteModalOpen, openDeleteModal } = useDeleteModal();
    const { deleteTask } = useTask();
    return { isDeleteModalOpen, openDeleteModal, deleteTask };
  }
});
</script>
