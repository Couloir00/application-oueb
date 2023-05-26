import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ContactPage from "./pages/ContactPage.vue";
import ArtistsGallery from "./pages/ArtistsGallery.vue";
import EventsGallery from "./pages/ArtistEvents.vue";

const routes = [
  { path: "/", component: HomePage, name: "homePage" },
  { path: "/contact", component: ContactPage, name: "contactPage" },
  { path: "/artists", component: ArtistsGallery, name: "artistsGallery" },
  { path: "/artist/:artistName", component: EventsGallery, name: "eventsPage" },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
