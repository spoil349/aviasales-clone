<template>
    <button
        :class="['filters-button', {'filters-opened': filtersOpened}]"
        type="button"
        @click="toggleFilters()"
    >
        {{filtersOpened ? buttonTextVariants.open : buttonTextVariants.close}}
    </button>
</template>

<script>

export default {
  name: 'FiltersButton',
  data() {
    return {
      filtersOpened: true,
      buttonTextVariants: {
        open: 'Раскрыть фильтры',
        close: 'Скрыть фильтры'
      }
    }
  },
  components: {
  },
  methods: {
    toggleFilters() {
      this.filtersOpened = !this.filtersOpened;
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.filters-button {
  display: none;
  background-color: $white;
  border: 1px solid $light-gray;
  border-left: none;
  border-right: none;
  border-radius: 5px;
  transition-duration: .15s;
  padding: 8px;

  &.filters-opened {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

@media (max-width: 767px) {
  .filters-button {
    display: block;
  }
}
</style>