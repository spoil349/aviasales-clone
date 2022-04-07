<template>
  <div class="sort">
    <ul class="sort__list">
      <li class="sort__item" v-for="item in sorts" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Sort',
  data() {
    return {
      sorts: [
        {
          id: 1,
          name: 'САМЫЙ ДЕШЕВЫЙ'
        },
        {
          id: 2,
          name: 'САМЫЙ БЫСТРЫЙ'
        },
        {
          id: 3,
          name: 'ОПТИМАЛЬНЫЙ'
        }
      ]   
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.sort {
  margin-bottom: 20px;

  // .sort__list
  &__list {
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;
  }

  // .sort__item
  &__item {
    flex: 0 1 33%;
    padding: 15px;
    background-color: $white;
    border: 1px solid $light-gray;
    cursor: pointer;
    @include filter-and-sort-title;

    &:hover {
      background-color: $light-blue;
    }

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &:not(:first-child) {
      border-left: none;
    }

    &.active {
      background-color: $blue;
      border-color: $blue;
      color: $white;
    }
  }
}

</style>
