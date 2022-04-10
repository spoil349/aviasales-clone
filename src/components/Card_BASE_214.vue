<template>
    <div class="card">
      <div class="card__upper">
        <p class="card__price">13 400 Р</p>
        <img class="card__company" width="110" height="36" src="../assets/s7-logo.png" alt="company_logo">
      </div>
      <Segment />
    </div>
</template>

<script>
import Segment from './Segment.vue'

export default {
  name: 'Card',
  components: {
    Segment,
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
