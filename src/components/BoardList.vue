<template>
  <ul>
    <li v-for="board in boardList" :key="board.uuid">{{ board.name }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BoardList",
  props: {
    boardList: {
      type: Array,
      default: () => []
    }
  }
});
</script>
