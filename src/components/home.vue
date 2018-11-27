<template>
  <div class="container">
    <div class="banner-wrapper"></div>
    <div class="module-core">
      <div class="section section_1">
        <div class="left"></div>
        <div class="right">
          <v-bar title="捕鱼攻略" extend="更多 +" @vBarExtendFn="showStrategy"></v-bar>
          <div class="js-Swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href=""><img src="../assets/image/NP1-1.jpg"></a>
              </div>
              <div class="swiper-slide">
                <a href=""><img src="../assets/image/NP1-2.jpg"></a>
              </div>
              <div class="swiper-slide">
                <a href=""><img src="../assets/image/NP1-3.jpg"></a>
              </div>
            </div>
            <div class="swiper-pagination" style="cursor: default"></div>
          </div>
        </div>
      </div>
      <div class="section section_2">
        <v-bar title="捕鱼截图" extend="更多 +" @vBarExtendFn="showScreenShot"></v-bar>
        <div class="screen-shot-wrapper">
          <img src="../assets/image/PIC4-1.jpg" alt="">
          <img src="../assets/image/PIC4-2.jpg" alt="">
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
  name: 'Home',
  data() {
    return {
      swiper: null
    }
  },
  methods: {
    showStrategy() {
      console.log('我将展示更多的游戏攻略')
    },
    showScreenShot() {
      console.log('我将展示更多的游戏截图')
    }
  },
  mounted() {
    this.swiper = new Swiper('.js-Swiper', {
      loop: true,
      pagination: '.swiper-pagination'
    })
  }
}

</script>
<style scoped lang="scss">
@import '../../static/swiper2/idangerous.swiper.css';

.banner-wrapper {
  height: 0;
  padding-top: 450px;
  background: url("../assets/image/banner.jpg") top center no-repeat;
}

.screen-shot-wrapper {
  display: flex;
  justify-content: space-around;
  padding: 30px 10px 0;
  margin: 0 20px;
}

.section_1 {
  margin-top: 30px;
  padding-left: 300px;
  height: 250px;

  .left {
    position: absolute;
  }

  .right {
    width: 100%;
    height: 100%;
    background: pink;

    .js-Swiper {
      position: relative;
      width: 281px;
      height: 164px;
      overflow: hidden;

      .swiper-pagination {
        position: absolute;
        bottom: 6px;
        height: 10px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        .swiper-pagination-switch {
          height: 10px;
        }
      }
    }
  }
}

.section_2 {
  margin-top: 30px;
}

</style>
