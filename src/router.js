import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ArtistsGallery from "./pages/ArtistsList.vue";
import EventsGallery from "./pages/ArtistEvents.vue";

const routes = [
  { path: "/", component: HomePage, name: "homePage" },
  { path: "/artists", component: ArtistsGallery, name: "artistsPage" },
  { path: "/artist/:artistName", component: EventsGallery, name: "eventsPage" },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
