<template>
  <div id="app">
    <v-header></v-header>
    <div class="page-container">
      <router-view />
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import Vue from 'vue'
import vHeader from '@/components/common/vHeader'
import vFooter from '@/components/common/vFooter'
Vue.component('vHeader', vHeader)
Vue.component('vFooter', vFooter)

export default {
  name: 'App'
}

</script>
<style lang="scss">
@import '../src/assets/style/base.scss';

html,
body {
  min-height: 100%;
  height: 100px;
  background: #fff;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
