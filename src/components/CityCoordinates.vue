<template>
  <div>
    <input type="text" v-model="city" placeholder="Enter a city name" />
    <a @click="getCoordinates" class="button">Get Coordinates</a>
    <p v-show="error">Error: City not found</p>
    <input
      type="range"
      min="10"
      max="1000"
      step="10"
      v-model="radius"
      @input="updateRadius"
      class="slider"
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
          // If no city is specified, simply emit empty coordinates
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

<style>
input.slider {
  -webkit-appearance: none;
  height: 8px;
  border-radius: 5px;
  background: #f5cf9b;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

input.slider:hover {
  opacity: 1;
}

input.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #f0b058;
  cursor: pointer;
}

input.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f0b058;
  cursor: pointer;
}
</style>
