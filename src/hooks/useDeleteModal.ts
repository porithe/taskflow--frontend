import { ref } from "vue";
const useDeleteModal = () => {
  const isDeleteModalOpen = ref(false);
  const openDeleteModal = () => (isDeleteModalOpen.value = true);
  return { isDeleteModalOpen, openDeleteModal };
};

export default useDeleteModal;
