<template>
  <div>
  <h1> LES SUPERS CONCERTS DE TES ARTISTES préférés ! </h1>
    <div class="image">
      <img src="https://images.prismic.io/bridgers/c18cc0eb-9135-4daa-a91a-d225e98f8f18_Skeleton.png?auto=compress,format&rect=0,0,1000,232&w=1000&h=232">
    </div>
    <ArtistList v-for="artist in artistsData" :key="artist.id" :artist="artist"/>
  </div>
</template>

<script>
import ArtistList from './components/ArtistList.vue';
import {getArtistsData} from '@/services/api/artistsRepository.js';
export default {
  name: 'App',
  components: {
    ArtistList, 
  },
  data(){
    return{
      artistsData:[],
    }
  },
  created(){
    this.retrieveArtistsData();
  },
  methods: {
    async retrieveArtistsData(){
      const artistsData = await getArtistsData();
      this.artistsData= artistsData;
      console.log(artistsData);
      console.log(artistsData.name);
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
