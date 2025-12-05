import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./pages/Layout.vue";

const router = createRouter({
  routes: [
    {
      component: Layout,
    },
  ],
  history: createWebHistory(),
});
createApp(App).use(router).mount("#app");
