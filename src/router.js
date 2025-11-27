import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./Pages/HomePage.vue";
import AboutPage from "./Pages/AboutPage.vue";
import ContactPage from "./Pages/ContactPage.vue";
import WorkPage from "./Pages/WorkPage.vue";
import ServicePage from "./Pages/ServicePage.vue";
import Slider from "./Pages/slider.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/work",
    name: "WorkPage",
    component: WorkPage,
  },
  {
    path: "/services",
    name: "ServicePage",
    component: ServicePage,
  },
  {
    path: "/slider",
    name: "Slider",
    component: Slider,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
