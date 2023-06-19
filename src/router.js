import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "./pages/AboutUs.vue";
import PizzaPage from "./pages/PizzaPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "pizzas",
      component: PizzaPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutUs,
    },
  ],
});
export { router };
