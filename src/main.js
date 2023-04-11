//TO DO ranger les dossiers
// Clean code !!!
// voir s'il n'y a pas moyen de juste passer artistes name et thumb_url plutôt que tout l'artiste (c'est surement ça qui ralenti)
// faire affichage stylé
// afficher des trucs par default (ex: si artiste n'a pas d'event)
// faire header et footer tout en étant responsive
// trier les event par pays ou date
// faire un petit peu de CSS, avoir une petite image de fond
// voir si je ne peux pas faire plutôt qu'une seule requête API 


import {createApp} from 'vue'
import App from './App.vue'
import router from'./router.js'


const app = createApp(App)
app.use(router)
app.mount('#app')