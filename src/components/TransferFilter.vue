<template>
    <div class="transfer-filter">
        <h3 class="transfer-filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        <ul class="transfer-filter__list">
            <li class="transfer-filter__item" v-for="item in transferVariants" :key="item.id">
                <label class="custom-checkbox">
                    <input class="custom-checkbox__input" type="checkbox">
                    <span class="custom-checkbox__fake"></span>
                    <span class="custom-checkbox__text">{{item.name}}</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'TransferFilter',
  components: {
  },
  data() {
    return {
      transferVariants: [
        {
          id: 1,
          name: 'Без пересадок'
        },
        {
          id: 2,
          name: '1 пересадка'
        },
        {
          id: 3,
          name: '2 пересадки'
        },
        {
          id: 4,
          name: '3 пересадки'
        }
      ]   
    }
  },
}
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.transfer-filter {
    background-color: $white;
    box-shadow: 0px 2px 8px 0px $shadow-color;
    border-radius: 5px;
    padding-bottom: 15px;

    &__title {
        @include filter-and-sort-title;
        padding: 20px;
    }

    &__list {
        list-style-type: none;
    }

    &__item {
        padding: 10px 20px;

        &:hover {
            background-color: $light-blue;
        }
    }
}

@media all and (max-width: 767px) {
  .transfer-filter {
    text-align: left;
    box-shadow: none;
    padding-bottom: 5px;

    &__title {
      padding: 10px 20px 0;
    }

    &__list {
      display: flex;
      justify-content: space-between;
    }
  }
}

.custom-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__input {
        display: none;
    }

    &__input:checked + .custom-checkbox__fake::before {
        opacity: 1;
    }

    // .custom-checkbox__fake
    &__fake {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border: 1px solid $blue;
        border-radius: 2px;
        position: relative;

        &::before {
            content: "";
            background: url('../assets/tick.svg') center center no-repeat;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: .2s;
            opacity: 0;
            width: 20px;
            height: 20px;
        }
    }

    // .custom-checkbox__text
    &__text {
        @include list-item-label;
    }
}


</style>