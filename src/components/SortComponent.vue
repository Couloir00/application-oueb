<template>
  <div class="button-group">
    <a
      @click="sort('A to Z')"
      :class="{ active: isActive('A to Z') }"
      class="button"
    >
      Alphabetic Sort Country/Cities
    </a>
    <a
      @click="sort('Distance')"
      :class="{ active: isActive('Distance') }"
      class="button"
    >
      Sort by Distance
    </a>
    <a @click="sort('')" :class="{ active: isActive('') }" class="button">
      Reset Chronologic Sorting
    </a>
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
  computed: {
    isActive() {
      return (type) => this.actualSort === type;
    },
  },
};
</script>

<style>
.button-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
a.active {
  background-color: #f0b058;
  color: #fff;
}
</style>
