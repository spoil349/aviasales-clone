<template>
    <div class="sidebar">
        <TransferFilter />
        <CompanyFilter />
    </div>
</template>

<script>
import TransferFilter from './TransferFilter.vue'
import CompanyFilter from './CompanyFilter.vue'

export default {
  name: 'Sidebar',
  components: {
    TransferFilter,
    CompanyFilter
  }
}
</script>

<style lang="scss">
.sidebar {
  display: grid;
  grid-gap: 20px;
}
</style>