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
          :class="{ 'border-yellow-400': isCurrentRoute(name) }"
        >
          {{ name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Routes from "@/constants/routes";

export default defineComponent({
  name: "NavBar",
  setup() {
    const routes = [
      {
        name: Routes.REGISTER
      },
      {
        name: Routes.LOGIN
      }
    ];
    const route = useRoute();
    const isCurrentRoute = (name: string) => {
      return name === route.name;
    };
    return {
      routes,
      isCurrentRoute
    };
  }
});
</script>
