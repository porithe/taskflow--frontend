<template>
  <Button
    text="create board"
    @click="addBoard"
    custom-classes="tracking-wide font-medium absolute top-8 right-8"
    padding-classes="px-12 py-4"
    font-size-class="text-xl"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { BoardActions } from "@/constants/board";
import { useToast } from "vue-toastification";
import ToastMessages from "@/constants/toastMessages";
import Button from "@/components/Button.vue";
export default defineComponent({
  name: "CreateBoard",
  components: { Button },
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
