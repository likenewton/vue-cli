<template>
  <div class="container">
    <div class="module-core">
      <div class="section section_2">
        <v-bar title="详情"></v-bar>
        <div class="screen-shot-wrapper">
          <img src="../assets/image/BPIC-1.jpg" alt="">
          <img src="../assets/image/BPIC-2.jpg" alt="">
        </div>
        </div>
      </div>
    </div>
</template>
<script>
import Vue from 'vue'
import vBar from '@/components/common/vBar'
import Swiper from '../../static/swiper2/idangerous.swiper.min.js'
Vue.component('vBar', vBar)

export default {
  name: 'Download',
  data() {
    return {}
  }
}

</script>
<style scoped lang="scss">
.screen-shot-wrapper {
  display: flex;
  justify-content: space-around;
  padding: 30px 10px 0;
  margin: 0 20px;
}

.section_2 {
  margin-top: 30px;
}

</style>
