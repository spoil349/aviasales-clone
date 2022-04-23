<template>
    <div class="results">
        <Card
          v-for="ticket in fetchedTickets"
          :key="ticket.id"
          :ticketInfo="ticket"
        />
        <LoadMoreButton />
    </div>
</template>

<script>
import Card from '../Card/Card.vue'
import LoadMoreButton from '../LoadMoreButton.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Results',
  components: {
    Card,
    LoadMoreButton
  },
  computed: {
    ...mapGetters(['fetchedTickets'])
  },
}
</script>

<style lang="scss">
  .results {
    display: flex;
    flex-flow: column nowrap;
  }
</style>
