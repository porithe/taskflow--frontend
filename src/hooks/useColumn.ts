import { ref } from "vue";
import { ColumnActions } from "@/constants/column";
import ToastMessages from "@/constants/toastMessages";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const useColumn = () => {
  const store = useStore();
  const route = useRoute();
  const toast = useToast();
  const isColumnListLoading = ref(true);
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
  const addColumn = async () => {
    try {
      await store.dispatch(
        `columnStore/${ColumnActions.ADD_COLUMN}`,
        route.params.uuid
      );
    } catch {
      toast.error(ToastMessages.GLOBAL_ERROR);
    }
  };
  return {
    isColumnListLoading,
    getColumnList,
    addColumn
  };
};

export default useColumn;
