<template>
    <div class="results">
        <Card
          v-for="ticket in fetchedTickets"
          :key="ticket.id"
          :ticketInfo="ticket"
        />
        <LoadMore />
    </div>
</template>

<script>
import Card from './Card.vue'
import LoadMore from './LoadMore.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Results',
  components: {
    Card,
    LoadMore
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
