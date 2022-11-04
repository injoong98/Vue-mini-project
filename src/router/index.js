import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContentView from "../views/ContentView.vue";
import SecretClinic from "../components/SecretClinic.vue";

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
      // {
      //   path: "create",
      //   name: "movieCreate",
      //   component: MovieCreate,
      // },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
