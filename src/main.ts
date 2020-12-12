import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "./index.scss";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
  timeout: false,
  icon: false
};

createApp(App)
  .use(store)
  .use(router)
  .use(Toast, options)
  .mount("#app");
