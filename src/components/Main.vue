<template>
    <main class="main">
        <Sort />
        <Results />
    </main>
</template>

<script>

import Sort from './Sort.vue'
import Results from './Results.vue'

export default {
  name: 'Main',
  components: {
    Sort,
    Results,
  }
}
</script>

<style lang="scss">

</style>
