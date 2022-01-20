import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Main from "../views/Main.vue";
import Reference from "../views/Reference.vue";
import Youtube from "../views/Youtube.vue";
import Movie from "../views/Movie.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";
import YoutubeDetail from "../views/YoutubeDetail.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/reference",
    name: "Reference",
    component: Reference,
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: Youtube,
  },
  {
    path: "/youtubeDetail/:id",
    name: "YoutubeDetail",
    component: YoutubeDetail,
  },
  {
    path: "/movie",
    name: "Movie",
    component: Movie,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
