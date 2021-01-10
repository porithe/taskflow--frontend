import { useStore } from "vuex";
import { TaskActions } from "@/constants/task";

const useAddTaskModal = () => {
  const store = useStore();
  const openModal = async (columnUuid: string) => {
    await store.dispatch(`taskStore/${TaskActions.OPEN_MODAL}`, columnUuid);
  };
  const closeModal = async () => {
    await store.dispatch(`taskStore/${TaskActions.CLOSE_MODAL}`);
  };
  return { openModal, closeModal };
};

export default useAddTaskModal;
