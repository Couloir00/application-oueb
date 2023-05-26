<template>
  <div class="event-card">
    <div class="event-info">
      <div class="header">
        <h2 class="datetime">{{ formattedDate }}</h2>
        <h3 class="country">{{ country }}</h3>
      </div>
      <div class="details">
        <p class="city">{{ city }}</p>
        <p class="venue">{{ venue }}</p>
        <div class="actions">
          <a
            v-if="ticketAvailable"
            :href="ticketUrl"
            target="_blank"
            class="button"
          >
            Get Tickets
          </a>
          <p v-else class="soldOut">Sold out</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    city: String,
    venue: String,
    datetime: String,
    tickets: Object,
    country: String,
  },
  computed: {
    formattedDate() {
      const dateObj = new Date(this.datetime);
      const options = { day: "numeric", month: "short", year: "numeric" };
      return dateObj.toLocaleDateString("en-US", options);
    },
    ticketUrl() {
      const ticketOffer = this.tickets.find(
        (offer) => offer.type === "Tickets"
      );
      return ticketOffer ? ticketOffer.url : null;
    },
    ticketAvailable() {
      return this.tickets.some((offer) => offer.status === "available");
    },
  },
};
</script>

<style scoped>
.event-card {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.event-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 0 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.datetime {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  color: #f0b058;
}

.country {
  font-size: 1.2rem;
  margin: 0;
  color: #f0b058;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.city {
  font-size: 1.1rem;
  margin: 0;
}

.venue {
  margin: 0;
  color: #888;
}

.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.soldOut {
  font-weight: bold;
  color: #f44336;
  margin: 0;
}
</style>
