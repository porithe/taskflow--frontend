<template>
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.83301 15L17.835 5.99801L26.837 15H26.835V30H8.83502V15H8.83301ZM5.83502 17.998L3.6198 20.2132L1.5 18.0934L15.7155 3.87793C16.8861 2.70736 18.7839 2.70736 19.9545 3.87793L34.17 18.0934L32.0502 20.2132L29.835 17.998V30C29.835 31.6569 28.4919 33 26.835 33H8.83502C7.17816 33 5.83502 31.6569 5.83502 30V17.998Z"
      :fill="color"
    />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "IconDashboard",
  props: {
    color: {
      type: String,
      default: "#B9B9B9"
    }
  }
});
</script>
