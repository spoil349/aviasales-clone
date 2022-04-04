<template>
  <div id="app">
    <Logo />
    <Container />
  </div>
</template>

<script>
import Container from './components/Container.vue'
import Logo from './components/Logo.vue'

export default {
  name: 'App',
  components: {
    Logo,
    Container
  }
}
</script>

<style lang="scss">
@import './styles/variables.scss';

#app {
  font-family: "Open sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 50px;
}
</style>
