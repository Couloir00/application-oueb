<template>
  <div class="artists-gallery-container">
    <div class="background-image">
      <div class="image-overlay">
        <h1>LES ARTISTES !</h1>
        <div class="gallery-options">
          <input
            type="text"
            v-model="search"
            placeholder="Chercher un.e artiste"
          />
        </div>
      </div>
    </div>

    <div v-if="isLoading" class="loading">
      <img src="@/assets/record-load.gif" alt="Loading..." />
      <p class="loadingText">Loading...</p>
    </div>
    <div class="artists-gallery">
      <div class="test" v-for="artist in filteredArtists" :key="artist.id">
        <router-link
          :to="{ name: 'eventsPage', params: { artistName: artist.name } }"
        >
          <ArtistList :artist="artist" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ArtistList from "@/components/ArtistList.vue";
import { artists, getAllData } from "@/services/api/artistsRepository.js";

export default {
  name: "ArtistsGallery",
  components: {
    ArtistList,
  },
  data() {
    return {
      AllArtistsData: {},
      search: "",
      isLoading: false,
    };
  },
  created() {
    this.retrieveArtistsData();
  },
  methods: {
    async retrieveArtistsData() {
      this.isLoading = true;
      const AllData = await getAllData(artists);
      this.AllArtistsData = AllData;
      console.log(this.AllArtistsData);
      this.isLoading = false;
    },
    filterArtists() {
      return Object.values(this.AllArtistsData).filter((artist) =>
        artist.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  computed: {
    filteredArtists() {
      return this.search === ""
        ? Object.values(this.AllArtistsData)
        : this.filterArtists();
    },
  },
};
</script>
<style scoped>
.artists-gallery-container {
  position: relative;
}

.background-image {
  position: relative;
  background-image: url("@/assets/FLPARIS23.png");
  background-size: cover;
  background-position: center;
  height: 30vh;
}
.image-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.image-overlay h1 {
  font-size: 24px;
  margin: 0;
}

.gallery-options {
  margin-top: 20px;
}

.gallery-options input {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

@media screen and (min-width: 769px) {
  .artists-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}

.image-container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 75%;
}
.image {
  width: 100%;
  height: auto;
}
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.loading img {
  width: 100px;
  height: 100px;
}
</style>
