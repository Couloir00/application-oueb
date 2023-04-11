<template>
  <div class="events-gallery">
    <h1 class="name">All {{this.$route.params.artistName}} Events</h1>
    <p v-show="AllData.length == 0">{{this.$route.params.artistName}} n'a pas de concert prévu pour le moment</p>
    <div class="gallery-options">
      <input type="text" v-model="search" placeholder="Chercher une ville">
    </div>
    <router-link :to="{name: 'artistsPage'}"> Go to back Artists Page </router-link>
    <div v-for="event in filteredEvents" :key="event.id"> 
    <EventCard :city="event.venue.city" :datetime="event.datetime" :tickets="event.offers" :country="event.venue.country"/>
   </div>
    
  </div>
</template>

<script>
  import EventCard from '@/components/ArtistEventsList.vue';
  import {getEventsData} from '@/services/api/artistsRepository.js';
  
  export default {
  name: 'EventsGallery',
  components: {
   EventCard
  },
  data(){
    return{
      AllData:{},
      search: ''
    };
  },
  created(){
    this.retrieveEventsData();
  },
  methods:{
    async retrieveEventsData(){
       this.AllData = await getEventsData(this.$route.params.artistName);      
    },
    filterEvents(){
      return Object.values(this.AllData).filter(event=>event.venue.city.toLowerCase().includes(this.search.toLowerCase()) || event.venue.country.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  computed:{
    filteredEvents(){
      return this.search === ""? Object.values(this.AllData):this.filterEvents();
    }
  }
};
 
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
