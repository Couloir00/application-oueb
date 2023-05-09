<template>
  <div>
    <button @click="sort('A to Z')">Alphabetic Sort Country/Cities</button>
    <button @click="sort('Distance')">Sort by Distance</button>
    <button @click="sort('')">Reset Chronologic Sorting</button>
  </div>
</template>

<script>
export default {
  name: "SortComponent",
  props: ["actualSort"],
  emits: ["update:actualSort"],
  methods: {
    sort(type) {
      this.$emit("update:actualSort", type);
    },
  },
};
</script>

<style>
button.active {
  background-color: #333;
  color: #fff;
}
</style>
