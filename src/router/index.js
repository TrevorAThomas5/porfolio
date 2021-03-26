import Vue from "vue";
import Router from "vue-router";
import home from "../components/home";
import about from "../components/projects";
import FFT from "../components/FFT";
import GH from "../components/GH";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/projects",
      name: "projects",
      component: about,
    },
    {
      path: "/FFT",
      name: "FFT",
      component: FFT,
    },
    {
        path: "/GH",
        name: "GH",
        component: GH,
    },
  ],
});
