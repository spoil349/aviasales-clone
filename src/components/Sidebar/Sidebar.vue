<template>
    <div class="sidebar">
        <FiltersButton />
        <TransferSorting />
        <CompanyFilter />
    </div>
</template>

<script>
import TransferSorting from './TransferSorting.vue'
import CompanyFilter from './CompanyFilter.vue'
import FiltersButton from '../FiltersButton.vue'

export default {
  name: 'Sidebar',
  components: {
    FiltersButton,
    TransferSorting,
    CompanyFilter
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.sidebar {
  display: grid;
  grid-gap: 20px;
  height: fit-content;
}

@media (max-width: 767px) {
  .sidebar {
    grid-gap: 0;
    border: 1px solid $light-gray;
    border-top: none;
    border-radius: 5px;
  }
}
</style>