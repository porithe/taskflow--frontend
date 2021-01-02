import { TaskGetters } from "@/constants/task";
import { ColumnActions } from "@/constants/column";
import ToastMessages from "@/constants/toastMessages";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

type callbackFunction = () => void;

const useTask = () => {
  const toast = useToast();
  const store = useStore();
  const route = useRoute();
  const addTask = async (
    taskTitle: string,
    taskDescription: string,
    closeModal: callbackFunction
  ) => {
    try {
      const taskData = {
        title: taskTitle,
        description: taskDescription,
        boardUuid: route.params.uuid,
        columnUuid: store.getters[`taskStore/${TaskGetters.COLUMN_UUID}`]
      };
      await store.dispatch(`columnStore/${ColumnActions.ADD_TASK}`, taskData);
      await closeModal();
    } catch {
      toast.error(ToastMessages.GLOBAL_ERROR);
    }
  };
  return { addTask };
};

export default useTask;
