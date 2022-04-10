<template>
    <img class="card__company" width="110" height="36" src="../assets/s7-logo.png" alt="company_logo">
</template>

<script>

export default {
  name: 'AviaCompanyLogo',
  props: {
    logoName: {
        type: String,
        default: () => {
            return ''
        }
    }
  },
  components: {
  },
  computed: {
  },
}
</script>

<style lang="scss">
</style>
