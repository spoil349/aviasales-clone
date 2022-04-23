<template>
    <div class="logo">
        <img class="logo__img" width="60" height="60" src="../assets/logo.svg" alt="">
    </div>
</template>

<script>

export default {
  name: 'Logo',
  components: {
  }
}
</script>

<style lang="scss">
.logo {
    width: 100%;
    margin-bottom: 50px;

    &__img {
        width: 60px;
        height: 60px;
        margin: 0 auto;
    }
}

@media (max-width: 767px) {
    .logo {
        margin-bottom: 20px;
    }
}
</style>
