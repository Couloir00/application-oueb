<template>
  <div>
    <input type="text" v-model="city" placeholder="Enter a city name" />
    <button @click="getCoordinates">Get Coordinates</button>
    <p v-show="error">Error: City not found</p>
    <input
      type="range"
      min="10"
      max="1000"
      step="10"
      v-model="radius"
      @input="updateRadius"
    />
    <p>Rayon : {{ radius }} km</p>
  </div>
</template>

<script>
import { computeCityNameToCoordinates } from "@/services/api/Maths.js";
export default {
  data() {
    return {
      city: localStorage.getItem("city") || "",
      radius: localStorage.getItem("radius") || 100,
      error: false,
    };
  },
  async mounted() {
    await this.computeCityNameToCoordinates();
  },
  methods: {
    updateRadius() {
      this.$emit("radius-updated", this.radius);
    },
    async getCoordinates() {
      try {
        if (!this.city) {
          // Si aucune ville n'est spécifiée, émettre simplement les coordonnées vides
          this.$emit("coordinates-updated", {
            latitude: null,
            longitude: null,
          });
          return;
        }
        const { latitude, longitude } = await computeCityNameToCoordinates(
          this.city
        );
        this.$emit("coordinates-updated", {
          latitude,
          longitude,
          radius: this.radius,
        });
        this.error = false;
      } catch (error) {
        console.error(error);
        this.error = true;
      }
    },
  },
  watch: {
    city: function (newCity) {
      localStorage.setItem("city", newCity);
    },
    radius: function (newRadius) {
      localStorage.setItem("radius", newRadius);
    },
  },
};
</script>
