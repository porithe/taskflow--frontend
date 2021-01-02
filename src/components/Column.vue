<template>
  <li class="mr-8 pb-10">
    <div class="flex w-96 h-14 items-center">
      <ColumnName
        :column-name="columnData.name"
        :column-uuid="columnData.uuid"
      />
      <button class="ml-auto" @click="openModal(columnData.uuid)">
        <IconPlusSmall />
      </button>
      <button class="ml-2" @click="openDeleteModal">
        <IconPlusSmall custom-classes="transform rotate-45" />
      </button>
    </div>
    <NoTasks v-if="!columnData.tasks.length" :column-uuid="columnData.uuid" />
    <ul v-else>
      <Task
        v-for="task in columnData.tasks"
        :task-data="task"
        :key="task.uuid"
      />
    </ul>
  </li>
  <DeleteModal v-if="isDeleteModalOpen" v-model:isOpen="isDeleteModalOpen">
    <template #delete-content>column</template>
    <template #delete-btn>
      <Button text="delete" />
    </template>
  </DeleteModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconPlusSmall from "@/assets/svg/IconPlusSmall.vue";
import NoTasks from "@/components/NoTasks.vue";
import Task from "@/components/Task.vue";
import ColumnName from "@/components/ColumnName.vue";
import useAddTaskModal from "@/hooks/useAddTaskModal";
import DeleteModal from "@/components/DeleteModal.vue";
import Button from "@/components/Button.vue";
import useDeleteModal from "@/hooks/useDeleteModal";
export default defineComponent({
  name: "Column",
  props: {
    columnData: {
      type: Object,
      required: true
    }
  },
  components: { IconPlusSmall, NoTasks, Task, ColumnName, DeleteModal, Button },
  setup() {
    const { openModal } = useAddTaskModal();
    const { isDeleteModalOpen, openDeleteModal } = useDeleteModal();
    return { openModal, isDeleteModalOpen, openDeleteModal };
  }
});
</script>
