<template>
  <div class="relative py-4 px-9 flex-grow overflow-x-auto">
    <Spinner v-if="isBoardInfoLoading || isColumnListLoading" />
    <template v-else>
      <BoardName />
      <div class="flex mt-3 justify-between flex-1 overflow-x-auto">
        <ColumnList />
        <button class="self-start focus:outline-none" @click="addColumn">
          <IconPlus />
        </button>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconPlus from "@/assets/svg/IconPlus.vue";
import ColumnList from "@/components/ColumnList.vue";
import BoardName from "@/components/BoardName.vue";
import Spinner from "@/components/Spinner.vue";
import useColumn from "@/hooks/useColumn";
import useBoard from "@/hooks/useBoard";
export default defineComponent({
  name: "Board",
  components: { IconPlus, ColumnList, BoardName, Spinner },
  setup() {
    const { isBoardInfoLoading, getBoardInfo } = useBoard();
    const { isColumnListLoading, getColumnList, addColumn } = useColumn();
    getBoardInfo();
    getColumnList();
    return {
      isBoardInfoLoading,
      isColumnListLoading,
      addColumn
    };
  }
});
</script>
