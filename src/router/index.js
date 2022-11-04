import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContentView from "../views/ContentView.vue";
import SecretClinic from "../components/SecretClinic.vue";
import TodaysFortune from "../components/TodaysFortune.vue";
import ContentResult from "../components/ContentResult.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Content",
    name: "Content",
    component: ContentView,
    children: [
      {
        path: "SecretClinic",
        name: "SecretClinic",
        component: SecretClinic,
      },
      {
        path: "TodaysFortune",
        name: "TodaysFortune",
        component: TodaysFortune,
      },
      {
        path: "ContentResult",
        name: "ContentResult",
        component: ContentResult,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
