<template>
<HeaderBand>
</HeaderBand>
    <h1 class="name">All {{this.$route.params.artistName}} Events</h1>
    <p v-show="AllData.length == 0">{{this.$route.params.artistName}} has no event scheduled at the moment</p>
    
    <div class="gallery-options">
      <input type="text" v-model="city" placeholder="Enter a city name" @blur="convertCityNameToCoordinates" @keyup.enter="convertCityNameToCoordinates">
      <input type="range" min="10" max="500" step="10" v-model="radius" />
      <p>Rayon : {{radius}} km </p>
      <p v-show="error">Error: City not found</p>
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
      sortOrder: '',
      radius:10,
      distance: null,
      city:'',
      latitude: null,
      longitude: null,
      error: false
      
    };
  },
  created(){
    this.retrieveEventsData();
  },
  methods:{
    async retrieveEventsData(){
       this.AllData = await getEventsData(this.$route.params.artistName);      
    },
    filterEventsByRadius() {
      const filteredEvents = Object.values(this.AllData);
  if (!this.city) {
    return filteredEvents;
  }
  
  const eventsWithinRadius = filteredEvents.filter(event => {
    const distance = this.calculateDistance(event.venue.latitude, event.venue.longitude);
    return this.isWithinRadius(distance, this.radius);
  });
  return eventsWithinRadius;
},

     sortEvents(events) {
      if (this.sortOrder === 'A to Z') {
        return events.sort((a, b) => {
          if (a.venue.country < b.venue.country) return -1;
          if (a.venue.country > b.venue.country) return 1;
          if (a.venue.city < b.venue.city) return -1;
          if (a.venue.city > b.venue.city) return 1;
          return 0;
        });
      } else if (this.sortOrder === '') {
        // Lorsque "Reset Sorting" est cliqué, sortOrder est défini sur une chaîne vide, ce qui entraîne la sortie des données brutes sans tri.
        return events;
      }
    },
    async convertCityNameToCoordinates() {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${this.city}&format=json&limit=1`);
        const data = await response.json();
        this.latitude = data[0].lat;
        this.longitude = data[0].lon;
        this.error = false;
      } catch (error) {
        console.error(error);
        this.error = true;
      }
    },
    calculateDistance(eventLatitude,eventLongitude){
      const earthRadius = 6371;
      //convert degrees to radian
      const dLat = (this.latitude - eventLatitude) * (Math.PI/180);
      const dLon = (this.longitude - eventLongitude) * (Math.PI/180);
      //first part of the haversine formula
      const haversineIntermediate = Math.sin(dLat / 2) ** 2 +
        Math.cos(eventLatitude * (Math.PI / 180)) *
          Math.cos(this.latitude * (Math.PI / 180)) *
          Math.sin(dLon / 2) ** 2;
      //second part of the haversine formula
      const haversineFinal = 2 * Math.atan2(Math.sqrt(haversineIntermediate), Math.sqrt(1 - haversineIntermediate));
      //convert the distance in kilometer
      const distance = earthRadius * haversineFinal;
      return distance.toFixed(2);
    },
    isWithinRadius(distance, radius) {
  return parseFloat(distance) <= parseFloat(radius);
}
  },
  computed:{
    filteredEvents(){
      let events = Object.values(this.AllData) 
      
      if(this.city !== ""){
        events = this.filterEventsByRadius();
      }
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
