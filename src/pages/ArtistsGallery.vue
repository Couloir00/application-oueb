<template>
  <div class="background-image">
    <div class="image-overlay">
      <h1>LES ARTISTES !</h1>
      <SearchComponent
        :searchBar="search"
        @update:searchBar="search = $event"
      />
    </div>
  </div>

  <LoadingComponent v-if="isLoading" />
  <div class="artists-gallery">
    <div class="test" v-for="artist in filteredArtists" :key="artist.id">
      <router-link
        :to="{ name: 'eventsPage', params: { artistName: artist.name } }"
      >
        <ArtistList :artist="artist" />
      </router-link>
    </div>
  </div>
</template>

<script>
import LoadingComponent from "@/components/LoadingComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import ArtistList from "@/components/ArtistList.vue";
import { artists, getAllData } from "@/services/api/artistsRepository.js";

export default {
  name: "ArtistsGallery",
  components: {
    ArtistList,
    SearchComponent,
    LoadingComponent,
  },
  data() {
    return {
      AllArtistsData: {},
      search: "",
      isLoading: false,
    };
  },
  created() {
    if (Object.keys(this.AllArtistsData).length === 0) {
      // Verify if artists data were already retrieved
      this.retrieveArtistsData();
    }
  },
  methods: {
    async retrieveArtistsData() {
      this.isLoading = true;
      try {
        // Verify if data are in cache
        const cachedData = localStorage.getItem("artistsData");
        if (cachedData) {
          this.AllArtistsData = JSON.parse(cachedData);
        } else {
          const AllData = await getAllData(artists);
          this.AllArtistsData = AllData;
          localStorage.setItem("artistsData", JSON.stringify(AllData));
        }
      } catch (error) {
        console.error(error);
      }
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

@media screen and (min-width: 768px) {
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
</style>
