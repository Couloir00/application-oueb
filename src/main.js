//TO DO ranger les dossiers
// Clean code !!!
// cookies
//voir si je peux ne load qu'une fois les artistes et ne pas avoir à refaire la requête quand je reviens sur la page d'accueil
// voir si je ne peux pas faire plutôt qu'une seule requête API
// afficher des trucs par default (ex: si artiste n'a pas d'event)
// faire header et footer tout en étant responsive
// trier les event par pays ou date

// voir s'il n'y a pas moyen de juste passer artistes name et thumb_url plutôt que tout l'artiste (c'est surement ça qui ralenti)
// faire affichage stylé


// faire un petit peu de CSS, avoir une petite image de fond



import {createApp} from 'vue'
import App from './App.vue'
import router from'./router.js'


const app = createApp(App)
app.use(router)
app.mount('#app')