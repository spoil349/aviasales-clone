<template>
    <div class="segment">
        <div class="segment__column">
            <p class="segment__title">MOW – HKT</p>
            <p class="segment__info">10:45 – 08:00</p>
        </div>
        <div class="segment__column">
            <p class="segment__title">В пути</p>
            <p class="segment__info">21ч 15м</p>
        </div>
        <div class="segment__column">
            <p class="segment__title">2 пересадки</p>
            <p class="segment__info">HKG, JNB</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Segment',
  components: {
  },
}
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.segment {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    text-align: left;

    // .segment__column
    &__column {
        display: flex;
        flex-flow: column nowrap;
    }

    // .segment__title
    &__title {
        @include segment-title;
    }

    // .segment__info
    &__info {
        @include segment-info;
    }
}

</style>
