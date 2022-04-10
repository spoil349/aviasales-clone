<template>
    <div class="segment">
        <div class="segment__column">
            <p class="segment__title">{{segmentInfo.origin}} – {{segmentInfo.destination}}</p>
            <p class="segment__info">{{segmentInfo.dateStart | moment('HH:mm')}} - {{segmentInfo.dateEnd | moment('HH:mm')}}</p>
        </div>
        <div class="segment__column">
            <p class="segment__title">В пути</p>
            <p class="segment__info">{{segmentInfo.duration | duration('hours')}}ч {{segmentInfo.duration | duration('minutes')}}м</p>
        </div>
        <div class="segment__column">
            <p class="segment__title">{{segmentInfo.stops.length}} пересадки</p>
            <p class="segment__info">{{segmentInfo.stops.join(', ')}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Segment',
  props: {
        segmentInfo: {
        type: Object,
        default: () => {
            return {}
        }
    }
  }
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

    &:not(:last-child) {
        margin-bottom: 10px;
    }

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
