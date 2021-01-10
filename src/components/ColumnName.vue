<template>
  <input
    v-model="name"
    class="text-gray-50 py-0.5 font-semibold text-xl bg-transparent flex-grow border-b-2 border-transparent outline-none focus:border-yellow-400 transition-colors"
    :class="{ 'border-red-500': isValidationError }"
  />
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import debounce from "lodash/debounce";
import { ColumnActions } from "@/constants/column";
export default defineComponent({
  name: "BoardName",
  props: {
    columnName: {
      type: String,
      default: ""
    },
    columnUuid: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const isValidationError = ref(false);
    const name = computed({
      get: () => props.columnName,
      set: debounce(val => {
        if (val.length >= 4) {
          isValidationError.value = false;
          store.dispatch(`columnStore/${ColumnActions.EDIT_COLUMN_NAME}`, {
            boardUuid: route.params.uuid,
            columnUuid: props.columnUuid,
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
