<template>
  <li class="mr-8 pb-10">
    <div class="flex w-96 h-14 items-center">
      <ColumnName
        :column-name="columnData.name"
        :column-uuid="columnData.uuid"
      />
      <button class="ml-auto"><IconPlusSmall /></button>
      <button class="ml-2"><IconDots /></button>
    </div>
    <NoTasks v-if="!columnData.tasks.length" />
    <ul v-else>
      <Task />
    </ul>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconPlusSmall from "@/assets/svg/IconPlusSmall.vue";
import IconDots from "@/assets/svg/IconDots.vue";
import NoTasks from "@/components/NoTasks.vue";
import Task from "@/components/Task.vue";
import ColumnName from "@/components/ColumnName.vue";
export default defineComponent({
  name: "Column",
  props: {
    columnData: {
      type: Object,
      required: true
    }
  },
  components: { IconPlusSmall, IconDots, NoTasks, Task, ColumnName }
});
</script>
