<template>
    <div class="results">
        <Card />
        <LoadMore />
    </div>
</template>

<script>
import Card from './Card.vue'
import LoadMore from './LoadMore.vue'

export default {
  name: 'Results',
  components: {
    Card,
    LoadMore
  }
}
</script>

<style lang="scss">

</style>
