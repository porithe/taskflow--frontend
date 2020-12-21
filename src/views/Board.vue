<template>
  <div class="relative py-4 px-9 flex-grow overflow-x-auto">
    <Spinner v-if="isBoardInfoLoading || isColumnListLoading" />
    <template v-else>
      <BoardName />
      <div class="flex mt-3 justify-between flex-1 overflow-x-auto">
        <ColumnList />
        <button class="self-start">
          <IconPlus />
        </button>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import IconPlus from "@/assets/svg/IconPlus.vue";
import ColumnList from "@/components/ColumnList.vue";
import BoardName from "@/components/BoardName.vue";
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";
import ToastMessages from "@/constants/toastMessages";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import { BoardActions } from "@/constants/board";
import { ColumnActions } from "@/constants/column";
export default defineComponent({
  name: "Board",
  components: { IconPlus, ColumnList, BoardName, Spinner },
  setup() {
    const isBoardInfoLoading = ref(true);
    const isColumnListLoading = ref(true);
    const route = useRoute();
    const toast = useToast();
    const store = useStore();
    const getBoardInfo = async () => {
      try {
        await store.dispatch(
          `boardStore/${BoardActions.GET_BOARD_INFO}`,
          route.params.uuid
        );
      } catch {
        toast.error(ToastMessages.GLOBAL_ERROR);
      } finally {
        isBoardInfoLoading.value = false;
      }
    };
    const getColumnList = async () => {
      try {
        await store.dispatch(
          `columnStore/${ColumnActions.GET_COLUMN_LIST}`,
          route.params.uuid
        );
      } catch {
        toast.error(ToastMessages.GLOBAL_ERROR);
      } finally {
        isColumnListLoading.value = false;
      }
    };
    getBoardInfo();
    getColumnList();
    return {
      isBoardInfoLoading,
      isColumnListLoading
    };
  }
});
</script>
