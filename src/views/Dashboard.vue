<template>
  <div
    class="flex flex-col items-start justify-start flex-grow relative"
    :class="{ 'items-center justify-center': !boardList.length }"
  >
    <Spinner v-if="isBoardListLoading" />
    <template v-else>
      <BoardList v-if="!!boardList.length" :board-list="boardList" />
      <h1 v-else class="text-gray-50 text-6xl font-semibold tracking-wide">
        No board yet.
      </h1>
      <CreateBoard />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import CreateBoard from "@/components/CreateBoard.vue";
import BoardList from "@/components/BoardList.vue";
import Spinner from "@/components/Spinner.vue";
import { useStore } from "vuex";
import { BoardGetters } from "@/constants/board";
import useBoard from "@/hooks/useBoard";
export default defineComponent({
  name: "Dashboard",
  components: { CreateBoard, BoardList, Spinner },
  setup() {
    const store = useStore();
    const { isBoardListLoading, getBoardList } = useBoard();
    getBoardList();
    return {
      boardList: computed(
        () => store.getters[`boardStore/${BoardGetters.BOARD_LIST}`]
      ),
      isBoardListLoading
    };
  }
});
</script>
