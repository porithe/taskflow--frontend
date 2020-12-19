<template>
  <div
    class="flex flex-col items-start justify-start flex-grow relative"
    :class="{ 'items-center justify-center': !boardList.length }"
  >
    <Spinner v-if="isLoading" />
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
import { defineComponent, computed, ref } from "vue";
import CreateBoard from "@/components/CreateBoard.vue";
import BoardList from "@/components/BoardList.vue";
import Spinner from "@/components/Spinner.vue";
import { useStore } from "vuex";
import { BoardActions, BoardGetters } from "@/constants/board";
import ToastMessages from "@/constants/toastMessages";
import { useToast } from "vue-toastification";
export default defineComponent({
  name: "Dashboard",
  components: { CreateBoard, BoardList, Spinner },
  setup() {
    const isLoading = ref(true);
    const store = useStore();
    const toast = useToast();
    const getBoardList = async () => {
      try {
        await store.dispatch(`boardStore/${BoardActions.GET_BOARD_LIST}`);
      } catch {
        toast.error(ToastMessages.GLOBAL_ERROR);
      } finally {
        isLoading.value = false;
      }
    };
    getBoardList();
    return {
      boardList: computed(
        () => store.getters[`boardStore/${BoardGetters.BOARD_LIST}`]
      ),
      isLoading
    };
  }
});
</script>
