let artists = [
  "Lana Del Rey",
  "Palace",
  "Phoebe Bridgers",
  "Clairo",
  "Pvris",
  "Birdy",
  "Dizzy",
  "Hayley Williams",
  "Boygenius",
  "Lucy Dacus",
  "Julien Baker",
  "The Greeting Committee",
  "Florence & The Machine",
  "Paramore",
  "Noga Erez",
  "Zola Blood",
  "Mitski",
  "The Night Game",
  "BROODS",
  "Phoenix",
  "Tash Sultana",
  "Lorde",
  "Isaac Delusion",
];

const formattedArtistsNames = async function (artists) {
  const artistsData = [];

  artists.forEach((artist) => {
    const artistName = artist.replace(/\s/g, "%20");
    artistsData.push(artistName);
  });

  return artistsData;
};

const getAllData = async function (artists) {
  const formattedArtists = await formattedArtistsNames(artists);
  const artistsData = [];

  for (const artist of formattedArtists) {
    const response = await fetch(
      `https://rest.bandsintown.com/artists/${artist}/?app_id=426caffc63138441a125573b12af891c`
    );
    if (response.status == 200) {
      const artistData = await response.json();
      artistsData.push(artistData);
    } else {
      throw new Error(response.statusText);
    }
  }
  return artistsData;
};

const getEventsData = async function (artist) {
  const response = await fetch(
    `https://rest.bandsintown.com/artists/${artist}/events/?app_id=426caffc63138441a125573b12af891c`
  );
  if (response.status == 200) {
    return response.json();
  } else {
    new Error(response.statusText);
  }
};

export { artists, getAllData, getEventsData };

//  What to do :
// Afficher les evenements sur la nouvelle page
// Quand on clique sur un artistes on a la liste de ses concerts (filtre)
// Faire un filtre en fonction de la date et un en fonction du lieu pour les events

// Améliorations :
// Faire un tableau avec tous les artistes dès le .js ?
// Bonus event autour de toi ? MAP avec les différents concerts qui arrivent et leur localisation
// Le load est lent

// TO ASK POURQUOI EST CE QU'IL Y A DES PROBLEMES D'AFFICHAGE MAIS PAS TOUT LE TEMPS
//        POURQUOI EST CE QUE JE N'ARRIVE PAS A AFFICHER MES EVENTS DANS MA PAGE EVENT MAIS J'ARRIVE A LES AFFICHER SUR MA PAGE ARTISTS
//        COMMENT COMMUNIQUER UNE INFO SUR L'ENDROIT OU ON CLIQUE (EX: JE CLIQUE SUR CLAIRO, JE VEUX RECUP SON NOM POUR N'AVOIR QUE SES INFOS POUR LES EVENTS)
// Préférable de faire une pop-up plutôt que deux fenêtres
