<template>
  <div class="flex flex-col items-center justify-center flex-grow">
    <NoBoard />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NoBoard from "@/components/NoBoard.vue";
export default defineComponent({
  name: "Dashboard",
  components: { NoBoard }
});
</script>
