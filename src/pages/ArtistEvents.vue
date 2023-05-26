<template>
  <h1 class="name">All {{ this.$route.params.artistName }} Events</h1>
  <p v-show="AllData.length == 0">
    {{ this.$route.params.artistName }} has no event scheduled at the moment
  </p>
  <CityCoordinates
    @coordinates-updated="updateCoordinates"
    @radius-updated="updateRadius"
  />
  <SortComponent
    v-model:actualSort="sortOrder"
    @update:actualSort="sortOrder = $event"
  />
  <br />
  <br />
  <div class="events-gallery">
    <EventCard
      v-for="event in filteredEvents"
      :key="event.id"
      :city="event.venue.city"
      :datetime="event.datetime"
      :venue="event.venue.name"
      :tickets="event.offers"
      :country="event.venue.country"
    />
  </div>
</template>

<script>
import EventCard from "@/components/ArtistEventsList.vue";
import { getEventsData } from "@/services/api/artistsRepository.js";
import SortComponent from "@/components/SortComponent.vue";
import { estimateDistance, isWithinRadius } from "@/services/api/Maths.js";
import CityCoordinates from "@/components/CityCoordinates.vue";
import { sortEvents } from "@/services/api/EventsSorting.js";
export default {
  name: "EventsGallery",
  components: {
    EventCard,
    SortComponent,
    CityCoordinates,
  },
  data() {
    return {
      sortOrder: "",
      AllData: {},
      radius: localStorage.getItem("radius") || 100,
      distance: null,
      city: localStorage.getItem("city") || "",
      latitude: null,
      longitude: null,
      error: false,
    };
  },
  created() {
    this.retrieveEventsData();
  },
  mounted() {
    estimateDistance();
    isWithinRadius();
  },
  methods: {
    async retrieveEventsData() {
      this.AllData = await getEventsData(this.$route.params.artistName);
    },
    updateRadius(radius) {
      this.radius = radius;
    },
    updateCoordinates({ latitude, longitude, radius }) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.radius = radius;
    },

    filterEventsByRadius() {
      const filteredEvents = Object.values(this.AllData);
      if (!this.city || this.latitude === null) {
        return filteredEvents;
      }
      const eventsWithinRadius = filteredEvents.filter((event) => {
        const distance = estimateDistance(
          event.venue.latitude,
          event.venue.longitude,
          this.latitude,
          this.longitude
        );
        return isWithinRadius(distance, this.radius);
      });
      return eventsWithinRadius;
    },

    sortEvents(events) {
      return sortEvents(events, this.sortOrder, this.latitude, this.longitude);
    },
  },
  computed: {
    filteredEvents() {
      let events = Object.values(this.AllData);

      if (this.city !== "") {
        events = this.filterEventsByRadius();
      }
      return this.sortEvents(events);
    },
  },
};
</script>

<style>
body {
  background-color: #ffffff;
}
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  size: auto;
}
.image:hover {
  filter: invert(1);
}
input[type="text"] {
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f0b058;
  margin-top: 60px;
}

.button {
  flex: 0 0 auto;
  margin: 5px;
  background-color: #f5cf9b;
  color: #fff;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #f0b058;
}
</style>
