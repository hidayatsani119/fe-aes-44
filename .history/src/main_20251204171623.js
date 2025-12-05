import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Encrypt from "./components/Encrypt.vue";
import Decrypt from "./components/Decrypt.vue";
import Layout from "./components/Layout.vue";
import Home from "./components/Home.vue";
import Anu from "./components/Anu.vue";

const router = createRouter({
  routes: [
    {
      path: "/anuan",
      component: Anu,
    },
    {
      path: "",
      redirect: "/encrypt",
    },
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
          children: [
            {
              path: "encrypt",
              component: Encrypt,
            },
            {
              path: "decrypt",
              component: Decrypt,
            },
          ],
        },
      ],
    },
  ],
  history: createWebHistory(),
});
createApp(App).use(router).mount("#app");
