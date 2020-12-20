<template>
  <li class="mr-8 pb-10">
    <div class="flex w-96 h-14 items-center">
      <p class="font-semibold text-gray-50 text-lg">Backlog</p>
      <button class="ml-auto"><IconPlusSmall /></button>
      <button class="ml-2"><IconDots /></button>
    </div>
    <NoTasks v-if="false" />
    <ul>
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
export default defineComponent({
  name: "Column",
  components: { IconPlusSmall, IconDots, NoTasks, Task }
});
</script>
