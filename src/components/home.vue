<template>
  <div class="containers">
    <v-banner></v-banner>
    <div class="module-core">
      <div class="section section_1">
        <div class="left"></div>
        <div class="right">
          <v-bar title="捕鱼攻略" extend="更多 +" @vBarExtendFn="showStrategy"></v-bar>
          <div class="newsinfo clearfix">
            <ul class="newslist">
              <li class="news-item">
                <span class="pointer"></span>
                <span class="text">终极狩猎，海魔来袭</span>
              </li>
              <li class="news-item">
                <span class="pointer"></span>
                <span class="text">海妖漩涡，爆金无限</span>
              </li>
              <li class="news-item">
                <span class="pointer"></span>
                <span class="text">钓鱼黑科技，告诉你如何新姿势钓鱼</span>
              </li>
              <li class="news-item">
                <span class="pointer"></span>
                <span class="text">捕鱼圣手全新版本火热来袭</span>
              </li>
            </ul>
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
      </div>
      <div class="section section_2">
        <v-bar title="捕鱼截图" extend="更多 +" @vBarExtendFn="showScreenShot"></v-bar>
        <div class="screen-shot-wrapper">
          <img v-for="(item, index) in imgList" :key="index" :src="item.src" v-show="index < currentPage * 2 && index >= (currentPage - 1) * 2">
        </div>
          <div class="pagination-wrapper">
            <b-pagination :total-rows="4" v-model="currentPage" :per-page="2" hide-goto-end-buttons prev-text="上一页" next-text="下一页"></b-pagination>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Vue from 'vue'
import vBar from '@/components/common/vBar'
import vBanner from '@/components/common/vBanner'
import Swiper from '../../static/swiper2/idangerous.swiper.min.js'
Vue.component('vBar', vBar)
Vue.component('vBanner', vBanner)

export default {
  name: 'Home',
  data() {
    return {
      currentPage: 1,
      swiper: null,
      imgList: [{
        src: require('../assets/image/PIC4-1.jpg')
      }, {
        src: require('../assets/image/PIC4-2.jpg')
      }, {
        src: require('../assets/image/PIC4-3.jpg')
      }, {
        src: require('../assets/image/PIC4-4.jpg')
      }]
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
      pagination: '.swiper-pagination',
      autoplay: 5000,
      paginationClickable: true,
      autoplayDisableOnInteraction: false
    })
  }
}

</script>
<style scoped lang="scss">
@import '../../static/swiper2/idangerous.swiper.css';

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

    .newsinfo {
      padding: 20px;

      .newslist {
        float: left;
        width: 369px;
        height: 164px;

        .news-item {
          position: relative;
          line-height: 28px;

          .pointer {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #888;
            vertical-align: top;
            top: 50%;
            transform: translateY(-50%);
          }

          .text {
            padding-left: 10px;
            font-size: 14px;
            color: #333;

            &:hover {
              color: #ff6900;
            }
          }
        }
      }
    }

    .js-Swiper {
      position: relative;
      float: right;
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
      }
    }
  }
}

.section_2 {
  margin-top: 30px;

  .pagination-wrapper {
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
  }
}

</style>
