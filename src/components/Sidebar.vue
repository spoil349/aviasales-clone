<template>
    <div class="sidebar">
        <FiltersButton />
        <TransferFilter />
        <CompanyFilter />
    </div>
</template>

<script>
import TransferFilter from './TransferFilter.vue'
import CompanyFilter from './CompanyFilter.vue'
import FiltersButton from './FiltersButton.vue'

export default {
  name: 'Sidebar',
  components: {
    FiltersButton,
    TransferFilter,
    CompanyFilter
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.sidebar {
  display: grid;
  grid-gap: 20px;
  height: fit-content;
}

@media all and (max-width: 767px) {
  .sidebar {
    grid-gap: 0;
    border: 1px solid $light-gray;
    border-top: none;
    border-radius: 5px;
  }
}
</style>