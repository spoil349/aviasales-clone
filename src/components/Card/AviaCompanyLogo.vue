<template>
    <img
      class="card__company"
      width="110"
      height="36"
      alt="company_logo"
      :src="require(`../../assets/${logoName}`)"
    >
</template>

<script>
export default {
  name: 'AviaCompanyLogo',
  props: {
    logoName: {
        type: String,
        default: () => "S7 Logo.png"
    }
  },
}
</script>

<style lang="scss">
</style>
