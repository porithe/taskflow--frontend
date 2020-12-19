<template>
  <div class="py-4 px-9 flex-grow overflow-x-auto">
    <h3 class="text-gray-50 font-semibold text-2xl">default board</h3>
    <div class="flex mt-3 justify-between flex-1 overflow-x-auto">
      <ColumnList />
      <button class="self-start">
        <IconPlus />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconPlus from "@/assets/svg/IconPlus.vue";
import ColumnList from "@/components/ColumnList.vue";
export default defineComponent({
  name: "Board",
  components: { IconPlus, ColumnList }
});
</script>
