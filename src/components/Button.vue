<template>
  <button
    class="focus:outline-none"
    :class="[
      bgColorClass,
      textColorClass,
      customClasses,
      paddingClasses,
      marginClasses,
      fontSizeClass
    ]"
  >
    {{ text }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    text: {
      type: String,
      default: "default"
    },
    textColorClass: {
      type: String,
      default: "text-gray-50"
    },
    bgColorClass: {
      type: String,
      default: "bg-yellow-400"
    },
    paddingClasses: {
      type: String,
      default: "py-2.5 px-6"
    },
    marginClasses: {
      type: String,
      default: "ml-auto"
    },
    fontSizeClass: {
      type: String,
      default: "text-base"
    },
    customClasses: {
      type: String,
      default: ""
    }
  }
});
</script>
