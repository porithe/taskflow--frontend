<template>
  <ul class="mr-3 overflow-x-auto flex flex-grow whitespace-nowrap">
    <Column
      v-for="column in columnList"
      :key="column.uuid"
      :column-data="column"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Column from "@/components/Column.vue";
import { useStore } from "vuex";
import { ColumnGetters } from "@/constants/column";
export default defineComponent({
  name: "ColumnList",
  components: { Column },
  setup() {
    const store = useStore();
    const columnList = computed(
      () => store.getters[`columnStore/${ColumnGetters.COLUMN_LIST}`]
    );
    return {
      columnList
    };
  }
});
</script>
