<template>
 <div>
  <h1> LES ARTISTES ! </h1>
    <div class="image">
      <img src="https://images.prismic.io/bridgers/c18cc0eb-9135-4daa-a91a-d225e98f8f18_Skeleton.png?auto=compress,format&rect=0,0,1000,232&w=1000&h=232">
    </div>

    <div class="artists-gallery">
      <div class="gallery-options">
          <input type="text" v-model="search" placeholder="Chercher un.e artiste">
      </div>
      <ArtistList v-for="artist in filteredArtists" :key="artist.id" :artist="artist"/>
      <ArtistEventsList v-if="AllEvents.length>0" :artist="AllArtists.find(artist => artist.name === 'Phoebe Bridgers')" :events="AllEvents"/>
    </div>

  </div>  
</template>

<script>
import ArtistEventsList from '@/components/ArtistEventsList.vue';
import {getPhoebeEventData} from '@/services/api/artistsRepository.js';
import ArtistList from '@/components/ArtistList.vue';
import {getPhoebeData, getPvrisData, getClairoData, getDizzyData, getHayleyData, getBirdyData, getTaylorData} from '@/services/api/artistsRepository.js';


export default {
  name: 'ArtistsGallery',
  components: {
    ArtistList, ArtistEventsList,
  },
  data(){
    return{
      AllArtistsData:[],
      AllEvents:[],
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
    },
    filterArtists(){
      return this.AllArtistsData.filter(artist=>artist.name.toLowerCase().includes(this.search.toLowerCase()));
    },
    async retrieveEventsData(){
      const PhoebeEventsData = await getPhoebeEventData();
      this.AllEvents.push(...PhoebeEventsData);
    }
  },
  computed:{
    filteredArtists(){
      return this.search === ""? this.AllArtistsData:this.filterArtists();
    }
  }
}
</script>

