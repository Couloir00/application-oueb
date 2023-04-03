import {createApp} from 'vue'
// import VueRouter from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import ArtistsGallery from './pages/ArtistsList.vue'
 import EventsGallery from './pages/ArtistEvents.vue'

const routes =[
    {path: '/', component: ArtistsGallery},
    {path: '/ArtistEvents', component: EventsGallery},
    {path: '/:catchAll(.*)', redirect: '/'},
]

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes
// })

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
//app.use(VueRouter)
app.mount('#app')
