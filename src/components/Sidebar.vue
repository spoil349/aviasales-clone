<template>
    <div class="sidebar">
        <TransferFilter />
        <CompanyFilter />
    </div>
</template>

<script>
import TransferFilter from './TransferFilter.vue'
import CompanyFilter from './TransferFilter.vue'

export default {
  name: 'Sidebar',
  components: {
    TransferFilter,
    CompanyFilter
  }
}
</script>

<style lang="scss">

</style>