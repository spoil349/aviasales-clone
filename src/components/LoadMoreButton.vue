<template>
    <button
        class="load-more"
        type="button"
        @click="showMoreTickets"
    >
        Показать еще 5 билетов!
    </button>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'LoadMoreButton',
  data() {
      return {
        ticketsQuantity: 5
      }
  },
  methods: {
    ...mapActions(['fetchTickets']),
    showMoreTickets() {
        this.ticketsQuantity += 5
        this.fetchTickets(this.ticketsQuantity)        
    }
  },
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.load-more {
    width: 100%;
    text-transform: uppercase;
    border-radius: 5px;
    background-color: $blue;
    color: $white;
    padding-top: 15px;
    padding-bottom: 15px;
    border: none;
    cursor: pointer;
    transition: all ease .1s;

    &:hover {
        filter: drop-shadow(2px 1px 3px $blue);
    }

    &:active {
        position: relative;
        transform: translateY(3%);
        filter: drop-shadow(2px 1px 3px $blue) grayscale(.3);
    }
}
</style>
