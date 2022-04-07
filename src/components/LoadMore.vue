<template>
    <button class="load-more" type="button">Показать еще 5 билетов!</button>
</template>

<script>
export default {
  name: 'LoadMore',
  components: {
  }
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
