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
      // Extracting only useful data
      const { name, thumb_url } = artistData;
      artistsData.push({ name, thumb_url });
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
