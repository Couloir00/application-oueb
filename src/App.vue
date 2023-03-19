<template>
  <div>
  <h1> LES SUPERS CONCERTS DE TES ARTISTES préférés ! </h1>
    <div class="image">
      <img src="https://images.prismic.io/bridgers/c18cc0eb-9135-4daa-a91a-d225e98f8f18_Skeleton.png?auto=compress,format&rect=0,0,1000,232&w=1000&h=232">
    </div>
    <ArtistList v-for="artist in PhoebeData" :key="artist.id" :artist="artist"/>
    <ArtistList v-for="artist in PvrisData" :key="artist.id" :artist="artist"/>
    <ArtistList v-for="artist in ClairoData" :key="artist.id" :artist="artist"/>
    <ArtistList v-for="artist in DizzyData" :key="artist.id" :artist="artist"/>
    <ArtistList v-for="artist in HayleyData" :key="artist.id" :artist="artist"/>
    <ArtistList v-for="artist in BirdyData" :key="artist.id" :artist="artist"/>
  </div>
</template>

<script>
import ArtistList from './components/ArtistList.vue';
import {getPhoebeData} from '@/services/api/artistsRepository.js';
import {getPvrisData} from '@/services/api/artistsRepository.js';
import {getClairoData} from '@/services/api/artistsRepository.js';
import {getDizzyData} from '@/services/api/artistsRepository.js';
import {getHayleyData} from '@/services/api/artistsRepository.js';
import {getBirdyData} from '@/services/api/artistsRepository.js';

export default {
  name: 'App',
  components: {
    ArtistList, 
  },
  data(){
    return{
      PhoebeData:[],
      PvrisData:[],
      ClairoData:[],
      DizzyData:[],
      HayleyData:[],
      BirdyData:[],
    }
  },
  created(){
    this.retrieveArtistsData();
  },
  methods: {
    async retrieveArtistsData(){
      const PhoebeData = await getPhoebeData();
      this.PhoebeData.push(PhoebeData);
      const PvrisData = await getPvrisData();
      this.PvrisData.push(PvrisData);
      const ClairoData = await getClairoData();
      this.ClairoData.push(ClairoData);
      const DizzyData = await getDizzyData();
      this.DizzyData.push(DizzyData);
      const HayleyData = await getHayleyData();
      this.HayleyData.push(HayleyData);
      const BirdyData = await getBirdyData();
      this.BirdyData.push(BirdyData);
      console.log(PhoebeData);
      console.log(PhoebeData.name);
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
