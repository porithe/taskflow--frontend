<template>
  <div class="flex justify-center items-center flex-grow">
    <form class="form">
      <div class="form-group">
        <input id="username" class="form-input" required />
        <label for="username" class="form-label">Username</label>
      </div>
      <div class="form-group">
        <input id="firstname" class="form-input" required />
        <label for="firstname" class="form-label">First name</label>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Register"
});
</script>
<style lang="scss" scoped>
@import "./src/assets/styles/form";
</style>
