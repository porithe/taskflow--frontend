<template>
  <div class="h-full bg-gray-900 p-8 flex flex-col">
    <span class="text-3xl tracking-wide font-bold text-yellow-400">
      taskflow
    </span>
    <span
      class="text-sm tracking-wide font-medium text-gray-50 opacity-40 mt-5"
    >
      GENERAL
    </span>
    <ul class="mt-5 w-80">
      <li
        v-for="{ name, icon } in routes"
        class="text-xl font-medium text-gray-500 mb-5 capitalize"
        :key="name"
      >
        <router-link
          :to="{ name }"
          class="flex items-center"
          :class="{ 'text-gray-50': isCurrentRoute(name) }"
        >
          <component
            :is="icon"
            :color="isCurrentRoute(name) ? '#F9FAFB' : '#6B7280'"
          />
          <span class="ml-5">{{ name }}</span>
        </router-link>
      </li>
    </ul>
    <ProfileInformation :profile-data="profileData" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import userApi from "@/api/user";
import ProfileInformation from "./ProfileInformation.vue";
import IconProfile from "@/assets/svg/IconProfile.vue";
import IconDashboard from "@/assets/svg/IconDashboard.vue";
import { useRoute } from "vue-router";
import Routes from "@/constants/routes";
import { AuthGetters } from "@/constants/auth";

export default defineComponent({
  name: "SideBar",
  components: { ProfileInformation, IconProfile, IconDashboard },
  setup() {
    const routes = [
      {
        name: Routes.PROFILE,
        icon: "IconProfile"
      },
      {
        name: Routes.DASHBOARD,
        icon: "IconDashboard"
      }
    ];
    const profileData = reactive({
      firstName: "",
      lastName: "",
      email: ""
    });
    const store = useStore();
    const route = useRoute();
    const isCurrentRoute = (name: string): boolean => {
      return route.name === name;
    };
    const token = store.getters[`authStore/${AuthGetters.TOKEN}`];
    const getUserProfile = async () => {
      const { data } = await userApi.profile(token);
      profileData.firstName = data.firstName;
      profileData.lastName = data.lastName;
      profileData.email = data.lastName;
    };
    getUserProfile();
    return { profileData, routes, isCurrentRoute };
  }
});
</script>
