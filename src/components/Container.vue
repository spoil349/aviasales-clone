<template>
    <div class="container">
        <Sidebar />
        <Main />
    </div>
</template>

<script>

import Sidebar from './Sidebar/Sidebar.vue'
import Main from './Main/Main.vue'

export default {
  name: 'Container',
  components: {
    Sidebar,
    Main
  }
}
</script>

<style lang="scss">

.container {
  display: grid;
  grid-template-columns: 232px auto;
  grid-gap: 20px; 
  max-width: 754px;
  margin: 0 auto 50px;
}

@media (max-width: 767px) {
  .container {
    grid-template-columns: none;
    grid-gap: 10px;
    padding: 0 10px 10px;
  }
}
</style>
