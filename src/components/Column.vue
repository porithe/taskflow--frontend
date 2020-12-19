<template>
  <div class="mr-6">
    <div class="flex w-96 h-14 items-center">
      <p class="font-semibold text-gray-50 text-lg">Backlog</p>
      <button class="ml-auto"><IconPlusSmall /></button>
      <button class="ml-2"><IconDots /></button>
    </div>
    <NoTasks />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconPlusSmall from "@/assets/svg/IconPlusSmall.vue";
import IconDots from "@/assets/svg/IconDots.vue";
import NoTasks from "@/components/NoTasks.vue";
export default defineComponent({
  name: "Column",
  components: { IconPlusSmall, IconDots, NoTasks }
});
</script>
