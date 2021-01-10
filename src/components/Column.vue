<template>
  <li class="mr-8 pb-10 h-full">
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
    <draggable
      v-else
      group="tasks"
      :list="columnData.tasks"
      item-key="uuid"
      @change="move($event, columnData.uuid)"
    >
      <template #item="{element}">
        <div>
          <Task :task-data="element" />
        </div>
      </template>
    </draggable>
  </li>
  <DeleteModal v-if="isDeleteModalOpen" v-model:isOpen="isDeleteModalOpen">
    <template #delete-content>column</template>
    <template #delete-btn>
      <Button text="delete" @click="deleteColumn(columnData.uuid)" />
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
import useColumn from "@/hooks/useColumn";
import draggable from "vuedraggable";
import { useStore } from "vuex";
import { ColumnActions } from "@/constants/column";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "Column",
  props: {
    columnData: {
      type: Object,
      required: true
    }
  },
  components: {
    IconPlusSmall,
    NoTasks,
    Task,
    ColumnName,
    DeleteModal,
    Button,
    draggable
  },
  setup() {
    const { openModal } = useAddTaskModal();
    const { isDeleteModalOpen, openDeleteModal } = useDeleteModal();
    const { deleteColumn } = useColumn();
    const route = useRoute();
    const store = useStore();
    const move = (e: any, col: string) => {
      if (e.added) {
        const taskData = {
          taskUuid: e.added.element.uuid,
          columnUuid: col,
          boardUuid: route.params.uuid,
          newPosition: e.added.newIndex,
          oldPosition: e.added.element.position,
          currentColumnUuid: e.added.element.columnUuid
        };
        console.log(e.added.element.position);
        store.dispatch(
          `columnStore/${ColumnActions.MOVE_TASK_TO_COLUMN}`,
          taskData
        );
      } else if (e.moved) {
        const movedTaskData = {
          newPosition: e.moved.newIndex,
          oldPosition: e.moved.oldIndex,
          taskUuid: e.moved.element.uuid,
          columnUuid: col,
          boardUuid: route.params.uuid
        };
        store.dispatch(
          `columnStore/${ColumnActions.CHANGE_TASKS_POSITION}`,
          movedTaskData
        );
      }
    };
    return {
      openModal,
      isDeleteModalOpen,
      openDeleteModal,
      deleteColumn,
      move
    };
  }
});
</script>
