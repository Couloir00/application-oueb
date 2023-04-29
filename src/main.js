//TO DO ranger les dossiers

// faire une page recherche d'event par location
//Problème avec isWithinRadius
//Problème avec le filtre qui s'applique de suite aussi. Il vaudrait mieux faire un bouton et un reset

//utiliser cette page pour faire les trucs des watchers et des données

// Clean code !!!
// cookies
// Gérer mieux le grid (mettre max 4/5 artistes par ligne et bien afficher les artistes une foi filtrés)

// faire les trucs avec les watcher
// faire événements personalisés pour les tris
// mettre Header et footer dans les components
// utiliser local storage pour ne pas voir si je peux ne load qu'une fois les artistes et ne pas avoir à refaire la requête quand je reviens sur la page d'accueil
// voir si je ne peux pas faire plutôt qu'une seule requête API
// voir s'il n'y a pas moyen de juste passer artistes name et thumb_url plutôt que tout l'artiste (c'est surement ça qui ralenti)
// faire affichage stylé
// faire un petit peu de CSS, avoir une petite image de fond

// Réflexion plus globale du sujet ex: partie service de l'application, ici c'est la au'on concentre les appels asynchrones,qui sont ensuite injectés après blablabla...
// Evoquer des difficultées, des choses qui m'ont plut etc etc.

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
