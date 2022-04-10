<template>
    <div class="card">
      <div class="card__upper">
        <p class="card__price">{{ticketInfo.price}}</p>
        <img class="card__company" width="110" height="36" src="../assets/s7-logo.png" alt="company_logo">
      </div>
      <Segment
        v-for="segment in filteredSegments"
        :key="segment.id"
        :segmentInfo="segment"
      />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Segment from './Segment.vue'

export default {
  name: 'Card',
  props: {
    ticketInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  components: {
    Segment,
  },
  computed: {
    ...mapGetters(['currentTicketSegments']),
    filteredSegments() {
      return this.currentTicketSegments(this.ticketInfo.segments)
    }
  },
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.card {
  margin-bottom: 20px;
  background-color: $white;
  padding: 20px;
  box-shadow: 0px 2px 8px 0px $shadow-color;
  border-radius: 5px;

  &__upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__price {
    color: $blue;
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
  }
}

@media all and (max-width: 767px) {

  .card {
    box-shadow: none;
    border: 1px solid $light-gray;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
}
</style>
