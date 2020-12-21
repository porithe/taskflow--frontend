import { ref } from "vue";
import { BoardActions } from "@/constants/board";
import ToastMessages from "@/constants/toastMessages";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const useBoard = () => {
  const store = useStore();
  const route = useRoute();
  const toast = useToast();
  const isBoardInfoLoading = ref(true);
  const isBoardListLoading = ref(true);
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
  const getBoardList = async () => {
    try {
      await store.dispatch(`boardStore/${BoardActions.GET_BOARD_LIST}`);
    } catch {
      toast.error(ToastMessages.GLOBAL_ERROR);
    } finally {
      isBoardListLoading.value = false;
    }
  };
  return {
    isBoardInfoLoading,
    isBoardListLoading,
    getBoardInfo,
    getBoardList
  };
};

export default useBoard;
