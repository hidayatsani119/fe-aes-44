import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Encrypt from "./pages/Encrypt.vue";
import Decrypt from "./pages/Decrypt.vue";
import Layout from "./pages/Layout.vue";
import Home from "./components/Home.vue";
import Anu from "./components/Form.vue";

const router = createRouter({
  routes: [{}],
  history: createWebHistory(),
});
createApp(App).use(router).mount("#app");
