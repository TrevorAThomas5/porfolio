import Vue from "vue";
import Router from "vue-router";
import home from "../components/home";
import about from "../components/projects";

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
  ],
});
