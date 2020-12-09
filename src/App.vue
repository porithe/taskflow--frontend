<template>
  <NavBar />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
export default defineComponent({
  name: "App",
  components: { NavBar }
});
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  @apply flex flex-col bg-gray-800;
}
</style>
