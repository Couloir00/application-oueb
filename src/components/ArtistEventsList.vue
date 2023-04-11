<template>
  <div class="event">
     <div v-if="artist.name">
      <h2 class="name">{{ artist.name }} events</h2>
      <ul class="events">
        <li v-for="event in events" :key="event.id"> {{event.venue.country}} - {{event.datetime}} </li>
      </ul>
  </div>
  </div>
</template>

<script>

export default {
  name: "ArtistEventsList",
  props: {
    artist: Object,
    events: Array,
  }
}
</script>

<style scoped>
.body{
  display:flex;
  justify-content: center;
}


.event{
  float: left;
  width: 21%;
  padding: 10px;
  margin: 20px;
  height: 250px;
  position: relative;

}
.event:hover{
  filter: invert(1);
}

</style>