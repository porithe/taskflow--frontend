<template>
  <ul class="mr-3 overflow-x-auto flex flex-grow whitespace-nowrap">
    <Column />
    <Column />
    <Column />
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Column from "@/components/Column.vue";
export default defineComponent({
  name: "ColumnList",
  components: { Column }
});
</script>
