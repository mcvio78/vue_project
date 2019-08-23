<template>
  <div>
    <h1>Events Listing</h1>

    <EventCard />

    <router-link :to="{ name: 'event-show', params: { id: 1 } }"
      >Show Event #1</router-link
    >
    <br />
    <router-link :to="{ name: 'event-show', params: { id: 2 } }"
      >Show Event #2</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    EventCard
  }
};
</script>

<style scoped></style>
