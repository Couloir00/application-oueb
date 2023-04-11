//TO DO ranger les dossiers
// Clean code !!!
// cookies
// Gérer mieux le grid (mettre max 4/5 artistes par ligne et bien afficher les artistes une foi filtrés)
//voir si je peux ne load qu'une fois les artistes et ne pas avoir à refaire la requête quand je reviens sur la page d'accueil
// voir si je ne peux pas faire plutôt qu'une seule requête API
// voir s'il n'y a pas moyen de juste passer artistes name et thumb_url plutôt que tout l'artiste (c'est surement ça qui ralenti)
// faire affichage stylé
// faire un petit peu de CSS, avoir une petite image de fond
//que faire du APP ?



import {createApp} from 'vue'
import App from './App.vue'
import router from'./router.js'


const app = createApp(App)
app.use(router)
app.mount('#app')