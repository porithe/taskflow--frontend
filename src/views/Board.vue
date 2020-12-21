<template>
  <div class="py-4 px-9 flex-grow overflow-x-auto">
    <BoardName />
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
import BoardName from "@/components/BoardName.vue";
import { useRoute } from "vue-router";
import ToastMessages from "@/constants/toastMessages";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import { BoardActions } from "@/constants/board";
export default defineComponent({
  name: "Board",
  components: { IconPlus, ColumnList, BoardName },
  setup() {
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
      }
    };
    getBoardInfo();
  }
});
</script>
