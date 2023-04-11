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
.body{
   display:flex;
   justify-content: center;
}


.artist{
  float: left;
  width: 21%;
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
  font-size: 1.2 rem;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
}

.artist:hover{
  filter: invert(1);
}

</style>