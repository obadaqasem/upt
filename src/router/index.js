import Vue from "vue";
import LangRouter from "vue-lang-router";
import translations from "../assets/locales";

/**********  GLOBAL VIEWS **********/
import Home from "../views/Home.vue";
import Agency from "../views/Agency.vue";
import ProductionHouse from "../views/ProductionHouse.vue";
import Careers from "../views/Careers.vue";
import NotFound from "../views/NotFound.vue";


Vue.use(LangRouter, {
  defaultLanguage: "en",
  translations
});

const routes = [
  {
    path: "/",
    name: "Root",
    beforeEnter: (to, from, next) => {
      next({path:"/home"});
      next();
    }
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      pageTitle: "UPT HOUSE | Video Makers in Jordan, Video Prodcution Company in jordan"
    }
  },
  {
    path: "/agency",
    name: "Agency",
    component: Agency,
    meta: {
      pageTitle: "UPT HOUSE | Agency",
      enterTransitionClassName: "animate__animated animate__slideInLeft",
      leaveTransitionClassName: "animate__animated animate__slideOutLeft"
    }
  },
  {
    path: "/production-house",
    name: "ProductionHouse",
    component: ProductionHouse,
    meta: {
      pageTitle: "UPT HOUSE | Production House",
      enterTransitionClassName: "animate__animated animate__slideInRight",
      leaveTransitionClassName: "animate__animated animate__slideOutRight"
    }
  },
  {
    path: "/careers",
    name: "careers",
    component: Careers,
    meta: {
      pageTitle: "UPT HOUSE | Careers"
    }
  },
  {
    path: "/*",
    name: "404",
    component: NotFound,
    meta: {
      pageTitle: "UPT HOUSE | Page not found"
    }
  }
]

const router = new LangRouter({
  mode: "history",
  routes
})

export default router;
