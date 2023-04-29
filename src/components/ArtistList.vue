<template>
  <div class="artist">
    <div v-if="artist.name">
      <h2 class="name">{{ artist.name }}</h2>
      <img :src="artist.thumb_url" :alt="artist.name"/>
    </div>
  </div>
</template>

<script>

export default {
  props: ['artist']
}
</script>

<style scoped>

.artist{
  display: inline-block; 
  width: 80%;
  padding: 10px;
  margin: 20px;
  height: 250px;
  position: relative;
}

.artist img {
  width: 100%;
  max-height: 250px;
  object-fit:cover;
}

.artist h2{
  margin: 0;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
}

.artist:hover{
  filter: invert(1);
}

@media screen and (max-width:768px) {

.artist{
  float: center;
  width: 75%;
  padding: 10px;
  margin: 20px;
  height: 250px;
  position: relative;
}
}



</style>