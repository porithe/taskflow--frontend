<template>
  <input
    v-model="name"
    class="text-gray-50 font-semibold text-2xl bg-transparent flex-grow"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "BoardName",
  setup() {
    // const name = computed(
    //     () =>
    // )
    const name = ref("default bord");
    return { name };
  }
});
</script>
