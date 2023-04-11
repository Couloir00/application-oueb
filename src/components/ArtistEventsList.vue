<template>
  <div class="eventCard">
    <div class="eventInfo">
      <h2 class="country">{{country}}</h2>
      <p class="city">{{city}}</p>
      <p class="datetime">{{formattedDate}}</p>

      <a v-if="ticketAvailable" :href="ticketUrl" target="_blank">Get Tickets</a>
      <p v-else>Sold out</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "EventCard",
  props: {
    city: String,
    datetime: String,
    tickets: Object,
    country: String,
  },
  computed:{
    formattedDate(){
      const dateObj = new Date(this.datetime)
      const options = { day: 'numeric', month: 'short', year: 'numeric' }
      return dateObj.toLocaleDateString('en-US', options)
    },
    ticketUrl(){
     const ticketOffer = this.tickets.find(offer=>offer.type ==='Tickets');
      if(ticketOffer){
        return ticketOffer.url;
      }
      return null;
    },
    ticketAvailable(){
      return this.tickets.some(offer=>offer.status ==='available');
    }
  },
}


</script>

<style scoped>

.eventCard {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.eventInfo {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 5px solid #f5cf9b;
  border-radius: 30px;
  background-color: #fff;
  width: 100%;
  max-width: 800px;
  margin: 0 20px;
}

.country {
  font-size: 1.2rem;
  font-weight: bold;
}

.city,
.venue,
.datetime {
  margin-right:20px;
  margin-top: 5px;
  margin-left: 10px;
}


a {
  margin-top: 10px;
  margin-left: auto;
  background-color: #f5cf9b;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
}

a:hover {
  background-color: #f0b058;
}

.eventInfo:hover {
  background-color: #f5cf9b;
}

@media screen and (max-width: 768px) {
  /* for tablets*/
  .eventInfo {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .city,
  .venue,
  .datetime {
    margin-left: 0;
  }
}

@media screen and (max-width: 600px) {
  /* for phones */
  .country {
    font-size: 1rem;
  }
  
  .eventInfo {
    margin: 0;
    border-radius: 0;
  }
  
  .city,
  .venue,
  .datetime {
    font-size: 0.8rem;
    margin-top: 3px;
  }
  
  a {
    margin-top: 5px;
    font-size: 0.8rem;
  }
}

</style>


