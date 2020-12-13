<template>
  <div class="flex mt-auto items-center w-full">
    <div
      class="w-16 h-16 bg-gray-100 rounded-full flex items-center
        justify-center text-gray-800 text-xl font-semibold tracking-wider"
    >
      {{ getInitials() }}
    </div>
    <div class="ml-5 flex items-center flex-grow">
      <p class="text-gray-100 text-xl font-medium tracking-wide">
        {{ profileData.firstName }}
      </p>
      <button class="ml-auto" @click="logout">
        <IconLogout />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconLogout from "@/assets/svg/IconLogout.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Routes from "@/constants/routes";
export default defineComponent({
  name: "ProfileInformation",
  components: { IconLogout },
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const getInitials = () => {
      return (
        props.profileData.firstName.charAt(0) +
        props.profileData.lastName.charAt(0)
      ).toUpperCase();
    };
    const logout = () => {
      store.commit("authStore/REMOVE_TOKEN");
      router.push({
        name: Routes.HOME
      });
    };
    return { getInitials, logout };
  }
});
</script>
