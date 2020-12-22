<template>
  <ul
    class="mt-32 mx-auto grid gap-4 grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-5"
  >
    <li v-for="board in boardList" :key="board.uuid" class="bg-gray-50">
      <router-link
        :to="{ name: 'board', params: { uuid: board.uuid } }"
        class="w-44 xl:w-48 2xl:w-50 px-6 py-3 text-gray-800 block text-center overflow-ellipsis whitespace-nowrap overflow-hidden"
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
