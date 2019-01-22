<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Container from './components/Container.vue';

export default {
  components: {
    appContainer: Container
  }
}
</script>

<style lang="scss">

</style>
