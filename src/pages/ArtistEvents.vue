<template>
 <div>
  <h1> LES DATES </h1>
    <div class="image">
      <img src="https://images.prismic.io/bridgers/c18cc0eb-9135-4daa-a91a-d225e98f8f18_Skeleton.png?auto=compress,format&rect=0,0,1000,232&w=1000&h=232">
    </div>

    <div class="events-gallery">
      <div class="gallery-options">
        <input type="text" v-model="search" placeholder="Chercher un événement">
      </div>
      <!-- <ArtistEventsList v-for="events in AllEvents" :key="events.id" :artist="AllEvents"/> -->

      <!-- Utiliser la valeur de la prop AllArtistsData pour trouver l'artiste -->
      <ArtistEventsList v-if="AllEvents.length > 0" :artist="this.AllArtistsData.find(artist => artist.name === 'Phoebe Bridgers')" :events="AllEvents" />
    </div>

    <router-link to="/"> Go to back Artists Page </router-link>
  </div>

</template>

<script>
  import ArtistEventsList from '@/components/ArtistEventsList.vue';
  import {getPhoebeEventData} from '@/services/api/artistsRepository.js';

  export default {
  name: 'EventsGallery',
  components: {
   ArtistEventsList
  },
  // Ajouter la propriété props pour recevoir la valeur de la propriété AllArtistsData
  props:{
    AllArtistsData:{
      type: Array,
      required: true
    }
  },
  data(){
    return{
      AllEvents:[],
      search: ""
    }
  },
  created(){
    this.retrieveEventsData();
  },
  methods: {
    //TO DO Retrieve a list of events from an artist and display it
    async retrieveEventsData(){
      const PhoebeEventsData = await getPhoebeEventData();
      this.AllEvents.push(...PhoebeEventsData);
      console.log(this.AllEvents);
    }
  },
}
</script>

<style>
body {
  background-color: #FFFFFF; 
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
