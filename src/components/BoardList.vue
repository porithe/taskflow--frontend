<template>
  <ul class="mt-32 mx-auto grid gap-4 grid-cols-5">
    <li v-for="board in boardList" :key="board.uuid" class="border">
      <router-link
        :to="{ name: 'board', params: { uuid: board.uuid } }"
        class="px-6 py-4 text-gray-50 block"
      >
        {{ board.name }}
      </router-link>
    </li>
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
