<template>
    <div class="company-filter">
        <h3 class="company-filter__title">КОМПАНИЯ</h3>
        <ul class="company-filter__list">
            <li class="company-filter__item" v-for="item in companies" :key="item.id">
                <label class="custom-radio">
                    <input class="custom-radio__input" type="radio" name="company">
                    <span class="custom-radio__fake"></span>
                    <span class="custom-radio__text">{{item.name}}</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'CompanyFilter',
  components: {
  },
  data() {
    return {
      companies: [
        {
          id: 1,
          name: 'Все'
        },
        {
          id: 2,
          name: 'S7 Airlines'
        },
        {
          id: 3,
          name: 'XiamenAir'
        }
      ]   
    }
  },
}
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.company-filter {
    background-color: $white;
    box-shadow: 0px 2px 8px 0px #0000001A;
    border-radius: 5px;
    padding-bottom: 15px;

    &__title {
        @include filter-and-sort-title;
        text-align: left;
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

.custom-radio {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__input {
        display: none;
    }

    &__input:checked + .custom-radio__fake::before {
        opacity: 1;
    }

    // .custom-radio__fake
    &__fake {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border: 1px solid $blue;
        border-radius: 2px;
        position: relative;
        border-radius: 50%;

        &::before {
            content: "";
            background-color: $blue;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: .2s;
            opacity: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
    }

    // .custom-radio__text
    &__text {
        @include list-item-label;
    }
}
</style>