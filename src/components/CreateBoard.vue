<template>
  <button
    class="bg-yellow-400 mt-24 px-12 py-4 text-xl tracking-wide font-medium"
    @click="addBoard"
  >
    create board
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { BoardActions } from "@/constants/board";
import { useToast } from "vue-toastification";
import ToastMessages from "@/constants/toastMessages";
export default defineComponent({
  name: "CreateBoard",
  setup() {
    const store = useStore();
    const toast = useToast();
    const addBoard = async () => {
      try {
        await store.dispatch(`boardStore/${BoardActions.ADD_BOARD}`);
      } catch {
        toast.error(ToastMessages.GLOBAL_ERROR);
      }
    };
    return { addBoard };
  }
});
</script>
