import Vue from "vue";
import Router from "vue-router";
import CatalogPage from "./app/features/CatalogPage.vue";
import DetailsPage from "./app/features/DetailsPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/catalog"
    },
    {
      path: "/catalog",
      name: "catalog",
      component: CatalogPage
    },
    {
      path: "/details/:comicId",
      name: "details",
      component: DetailsPage
    }
  ]
});
