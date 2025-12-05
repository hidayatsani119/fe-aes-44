import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./pages/Layout.vue";
import Encrypt from "./pages/Encrypt.vue";
import Decrypt from "./pages/Decrypt.vue";

const router = createRouter({
  routes: [
    {
      path: "",
      redirect: "/encrypt",
    },
    {
      component: Layout,
      children: [
        {
          path: "/encrypt",
          component: Encrypt,
        },
        {
          path: "/decrypt",
          component: Decrypt,
        },
      ],
    },
  ],
  history: createWebHistory(),
});
createApp(App).use(router).mount("#app");
