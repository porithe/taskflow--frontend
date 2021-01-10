<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="customClasses"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 11H22V13H13V22H11V13H2V11H11V2H13V11Z"
      fill="#F0F0F0"
    />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "IconPlusSmall",
  props: {
    customClasses: {
      type: String,
      default: ""
    }
  }
});
</script>
