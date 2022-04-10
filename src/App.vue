<template>
  <div id="app">
    <Logo />
    <Container />
  </div>
</template>

<script>
import Container from './components/Container.vue'
import Logo from './components/Logo.vue'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Logo,
    Container
  },
  methods: {
    ...mapActions(['fetchTickets', 'fetchSegments', 'fetchCompanies'])
  },
  async mounted() {
    this.fetchTickets()
    this.fetchSegments()
    this.fetchCompanies()
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

@media all and (max-width: 767px) {
  #app {
    margin-top: 20px;
  }
}
</style>
