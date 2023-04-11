<template>
<HeaderBand>
</HeaderBand>
    <h1 class="name">All {{this.$route.params.artistName}} Events</h1>
    <p v-show="AllData.length == 0">{{this.$route.params.artistName}} n'a pas de concert prévu pour le moment</p>
    <div class="gallery-options">
      <input type="text" v-model="search" placeholder="Chercher une ville ou un pays">
      <button @click="sortOrder = 'A to Z'">Alphabetic Sort Country/Cities</button>
      <button @click="sortOrder = ''">Reset Chronologic Sorting</button>
    </div>
    <div class="events-gallery">
    <div v-for="event in filteredEvents" :key="event.id"> 
    <EventCard :city="event.venue.city" :datetime="event.datetime" :tickets="event.offers" :country="event.venue.country"/>
   </div>
    
  </div>
</template>

<script>
import HeaderBand from './Header.vue';

  import EventCard from '@/components/ArtistEventsList.vue';
  import {getEventsData} from '@/services/api/artistsRepository.js';
  
  export default {
  name: 'EventsGallery',
  components: {
   EventCard, HeaderBand,
  },
  data(){
    return{
      AllData:{},
      search: '',
      sortOrder: ''
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
    },
     sortEvents() {
  if (this.sortOrder === 'A to Z') {
    return Object.values(this.AllData).sort((a, b) => {
      if (a.venue.country < b.venue.country) return -1;
      if (a.venue.country > b.venue.country) return 1;
      if (a.venue.city < b.venue.city) return -1;
      if (a.venue.city > b.venue.city) return 1;
      return 0;
    });
  } else if (this.sortOrder === '') {
    // Lorsque "Reset Sorting" est cliqué, sortOrder est défini sur une chaîne vide, ce qui entraîne la sortie des données brutes sans tri.
    return Object.values(this.AllData);
  }
}
  },
  computed:{
    filteredEvents(){
      let events = this.search === ""? Object.values(this.AllData):this.filterEvents();
      return this.sortEvents(events);
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

input[type="text"] {
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
}

#app{
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FF4118;
  margin-top: 60px;
}

/* Charger la police de Google Fonts */
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');


</style>
