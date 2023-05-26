<template>
  <div class="gallery-options">
    <input
      type="text"
      v-model="search"
      @input="updateSearchBar"
      placeholder="Chercher un.e artiste"
    />
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  props: ["searchBar"],
  emits: ["update:searchBar"],
  methods: {
    updateSearchBar(event) {
      this.$emit("update:searchBar", event.target.value);
    },
  },
};
</script>
<style scoped>
.gallery-options {
  margin-top: 20px;
}

.gallery-options input {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
</style>
