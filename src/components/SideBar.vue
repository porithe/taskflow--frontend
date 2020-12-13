<template>
  <div class="w-96 h-full bg-gray-900 p-8 flex flex-col">
    <span class="text-3xl tracking-wide font-bold text-yellow-400">
      taskflow
    </span>
    <ProfileInformation :profile-data="profileData" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import userApi from "@/api/user";
import ProfileInformation from "./ProfileInformation.vue";
export default defineComponent({
  name: "SideBar",
  components: { ProfileInformation },
  setup() {
    const profileData = reactive({
      firstName: "",
      lastName: "",
      email: ""
    });
    const store = useStore();
    const token = store.getters["authStore/token"];
    const getUserProfile = async () => {
      const { data } = await userApi.profile(token);
      profileData.firstName = data.firstName;
      profileData.lastName = data.lastName;
      profileData.email = data.lastName;
    };
    getUserProfile();
    return { profileData };
  }
});
</script>
