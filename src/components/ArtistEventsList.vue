<template>
  <div class="event">
    <div v-if="event.artist.name">
      <h2 class="name">{{ event.artist.name }}</h2>
      <p class="city"> {{event.city}} </p>
      <p class="date"> {{event.starts_at}} </p>
      <p class="status"> {{event.offers.status}} </p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['event']
}
</script>

<style scoped>
.body{
  flex-direction: row;
}

.artist{
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
.artist:hover{
  filter: invert(1);
}

</style>