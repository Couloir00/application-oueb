<template>
  <div class="artist">
    <div v-if="artist.name">
      <h2 class="name">{{ artist.name }}</h2>
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
  width: 75%;
  height: 25%;
  background-color: #000000;
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