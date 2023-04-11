import {createRouter, createWebHistory} from 'vue-router'
import ArtistsGallery from './pages/ArtistsList.vue'
import EventsGallery from './pages/ArtistEvents.vue'


const routes =[
    {path: '/', component: ArtistsGallery, name:"artistsPage"},
    {path: '/artist/:artistName', component: EventsGallery, name:"eventsPage"},
    {path: '/:catchAll(.*)', redirect: '/'},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;