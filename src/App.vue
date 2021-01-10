<template>
  <div class="flex h-full" :class="{ 'flex-col': !isUserLogged }">
    <NavBar v-if="!isUserLogged" />
    <SideBar v-else />
    <router-view />
  </div>
  <AddTaskModal v-if="isAddTaskModalOpen" />
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import AddTaskModal from "@/components/AddTaskModal.vue";
import { useStore } from "vuex";
import { AuthGetters } from "@/constants/auth";
import { TaskGetters } from "@/constants/task";

export default defineComponent({
  name: "App",
  components: { NavBar, SideBar, AddTaskModal },
  setup() {
    const store = useStore();
    const isUserLogged = computed(
      () => store.getters[`authStore/${AuthGetters.TOKEN}`]
    );
    const isAddTaskModalOpen = computed(
      () => store.getters[`taskStore/${TaskGetters.IS_MODAL_OPEN}`]
    );
    return { isUserLogged, isAddTaskModalOpen };
  }
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
  @media (min-width: 1px) and (max-width: 1024px) {
    &::after {
      @apply absolute inset-0 flex justify-center items-center bg-gray-900 text-gray-50 text-2xl;
      content: "MIN RESOLUTION: 1025px";
    }
  }
}
#app {
  width: 100%;
  height: 100%;
  @apply flex flex-col bg-gray-800;
}
</style>
