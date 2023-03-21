<template>
  <div class="event">
     <div v-if="artist.name">
      <h2 class="name">{{ artist.name }} events</h2>
      <ul class="events">
        <li v-for="event in events" :key="event.id"> {{event.name}} - {{event.date}} </li>
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
  flex-direction: row;
}

.event{
  width: 25%;
  height: 25%;
  background-color: #000000;
  align-items: center;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
.event:hover{
  filter: invert(1);
}

</style>