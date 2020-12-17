<template>
  <div class="flex flex-col items-center justify-center flex-grow">
    <BoardList v-if="boardList.length > 0" :board-list="boardList" />
    <h1 v-else class="text-gray-50 text-6xl font-semibold tracking-wide">
      No board yet.
    </h1>
    <CreateBoard />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import CreateBoard from "@/components/CreateBoard.vue";
import BoardList from "@/components/BoardList.vue";
import { useStore } from "vuex";
import { BoardGetters } from "@/constants/board";
export default defineComponent({
  name: "Dashboard",
  components: { CreateBoard, BoardList },
  setup() {
    const store = useStore();
    const boardList = computed(
      () => store.getters[`boardStore/${BoardGetters.BOARD_LIST}`]
    );
    return { boardList };
  }
});
</script>
