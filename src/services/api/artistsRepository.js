let artists = [
  "Birdy",
  "Boygenius",
  "BROODS",
  "Clairo",
  "Dizzy",
  "Florence & The Machine",
  "Hayley Williams",
  "Isaac Delusion",
  "Julien Baker",
  "Lana Del Rey",
  "Lorde",
  "Lucy Dacus",
  "Mitski",
  "Noga Erez",
  "Palace",
  "Paramore",
  "Phoebe Bridgers",
  "Phoenix",
  "Pvris",
  "Tash Sultana",
  "The Greeting Committee",
  "The Night Game",
  "Zola Blood",
];

const formattedArtistsNames = async function (artists) {
  const artistsData = [];

  artists.forEach((artist) => {
    const artistName = artist.replace(/\s/g, "%20");
    artistsData.push(artistName);
  });

  return artistsData;
};

const getallData = async function (artists) {
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

export { artists, getallData, getEventsData };
