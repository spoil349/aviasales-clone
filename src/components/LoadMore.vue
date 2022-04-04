<template>
    <div class="load-more">
        <button class="load-more__button" type="button">Показать еще 5 билетов!</button>
    </div>
</template>

<script>
export default {
  name: 'LoadMore',
  components: {
  }
}
</script>

<style lang="scss">
    .load-more {
        &__button {
            text-transform: uppercase;
        }
    }
</style>
