<template>
  <div>
  <h1> LES SUPERS CONCERTS DE TES ARTISTES préférés ! </h1>
    <div class="image">
      <img src="https://images.prismic.io/bridgers/c18cc0eb-9135-4daa-a91a-d225e98f8f18_Skeleton.png?auto=compress,format&rect=0,0,1000,232&w=1000&h=232">
    </div>

    <div class="artists-gallery">
      <div class="gallery-options">
        <input type="text" v-model="search" placeholder="Chercher un.e artiste">
      </div>
      <ArtistList v-for="artist in filteredArtists" :key="artist.id" :artist="artist"/>
      <ArtistEventsList v-if="PhoebeEvents.length > 0" :artist="AllArtistsData.find(artist => artist.name === 'Phoebe Bridgers')" :events="PhoebeEvents" />
      
   </div>
  </div>
</template>

<script>
import ArtistList from './components/ArtistList.vue';
import ArtistEventsList from './components/ArtistEventsList.vue';
import {getPhoebeData, getPvrisData, getClairoData, getDizzyData, getHayleyData, getBirdyData, getTaylorData} from '@/services/api/artistsRepository.js';
import {getPhoebeEventData} from '@/services/api/artistsRepository.js';

export default {
  name: 'App',
  components: {
    ArtistList, ArtistEventsList,
  },
  data(){
    return{
      PhoebeEvents:[],
      AllArtistsData:[],
      search: ""
    }
  },
  created(){
    this.retrieveArtistsData();
    this.retrieveEventsData();
  },
  methods: {
    async retrieveArtistsData(){
      const PhoebeData = await getPhoebeData();
      this.AllArtistsData.push(PhoebeData);
      const PvrisData = await getPvrisData();
      this.AllArtistsData.push(PvrisData);
      const ClairoData = await getClairoData();
      this.AllArtistsData.push(ClairoData);
      const DizzyData = await getDizzyData();
      this.AllArtistsData.push(DizzyData);
      const HayleyData = await getHayleyData();
      this.AllArtistsData.push(HayleyData);
      const BirdyData = await getBirdyData();
      this.AllArtistsData.push(BirdyData);
      const TaylorData = await getTaylorData();
      this.AllArtistsData.push(TaylorData);
      console.log(this.AllArtistsData);
      console.log(this.AllArtistsData.name);
    },
    filterArtists(){
      return this.AllArtistsData.filter(artist=>artist.name.toLowerCase().includes(this.search.toLowerCase()));
    },
    //TO DO Retrieve a list of events from an artist and display it
    async retrieveEventsData(){
      const PhoebeEventsData = await getPhoebeEventData();
      this.PhoebeEvents.push(...PhoebeEventsData);
      console.log(this.PhoebeEvents.id);
    }
  },
  computed:{
    filteredArtists(){
      return this.search === ""? this.AllArtistsData:this.filterArtists();
    }
  }
}
</script>

<style>
body {
  background-color: #000000; 
}
.image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  size: auto;
}
.image:hover{
  filter: invert(1);

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FF4118;
  margin-top: 60px;
}

</style>
