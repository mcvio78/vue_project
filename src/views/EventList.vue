<template>
  <div>
    <h1>Events Listing</h1>

    <EventCard />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import axios from 'axios';

export default {
  components: {
    EventCard
  },
  created() {
    axios
      .get('http://localhost:3000/events') // Does a get request
      .then(response => {
        console.log(response.data); // For now, logs out the response
      })
      .catch(error => {
        console.log('There was an error:', error.response); // Logs out the error
      });
  }
};
</script>

<style scoped></style>
