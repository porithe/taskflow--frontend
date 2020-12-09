<template>
  <nav class="h-28 pl-6 pr-3 flex items-center">
    <span class="text-3xl tracking-wide font-bold text-yellow-400">
      taskflow
    </span>
    <ul class="ml-auto flex">
      <li
        v-for="{ name } in routes"
        class="text-xl font-thin text-gray-50 tracking-wider mx-1"
        :key="name"
      >
        <router-link
          :to="name"
          class="p-3 border-b-2 border-transparent hover:border-yellow-400 transition duration-200"
        >
          {{ name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
  setup() {
    const routes = [
      {
        name: "register"
      },
      {
        name: "login"
      }
    ];
    return {
      routes
    };
  }
});
</script>
