<template>
  <input
    v-model="name"
    class="text-gray-50 py-2 font-semibold text-2xl bg-transparent flex-grow border-b-2 border-transparent outline-none focus:border-yellow-400 transition-colors"
    :class="{ 'border-red-500': isValidationError }"
  />
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { BoardActions, BoardGetters } from "@/constants/board";
import { useRoute } from "vue-router";
import debounce from "lodash/debounce";
export default defineComponent({
  name: "BoardName",
  setup() {
    const store = useStore();
    const route = useRoute();
    const isValidationError = ref(false);
    const name = computed({
      get: () => store.getters[`boardStore/${BoardGetters.BOARD_NAME}`],
      set: debounce(val => {
        if (val.length >= 4) {
          isValidationError.value = false;
          store.dispatch(`boardStore/${BoardActions.EDIT_BOARD_NAME}`, {
            boardUuid: route.params.uuid,
            name: val
          });
        } else {
          isValidationError.value = true;
        }
      }, 500)
    });
    return { name, isValidationError };
  }
});
</script>
