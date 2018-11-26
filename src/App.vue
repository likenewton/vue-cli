<template>
  <div id="app">
    <v-header></v-header>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vHeader from '@/components/common/vHeader'
Vue.component('vHeader', vHeader)

export default {
  name: 'App'
}

</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
