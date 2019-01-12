<template>
  <div class="containers home-container">
    <v-banner></v-banner>
    <div class="module-core">
      <div class="section section_1">
        <div class="left">
          <!-- vue-bootstrap -->
          <b-card no-body>
            <b-tabs card>
              <b-tab title="账号登录" active>
                <div class="form-wrapper">
                  <div class="input username">
                    <i class="iconfont">&#xe607;</i>
                    <input v-model="userName" type="text">
                  </div>
                  <div class="input password">
                    <i class="iconfont">&#xe657;</i>
                    <input v-model="password" type="password">
                  </div>
                </div>
                <div class="checkbox-wrapper">
                  <b-form-checkbox id="auto-login" v-model="autoStatus" value="accepted" unchecked-value="not_accepted">自动登录</b-form-checkbox>
                  <router-link class="hover-yellow fr" :to="{name: 'Center', query: {id: '_2'}}">忘记密码？</router-link>
                </div>
                <div class="btn-wrapper">
                  <b-button variant="warning" class="block" @click="isShowModal=true">马上登录</b-button>
                </div>
                <div class="to-register">
                  <span>还没有账号？</span>
                  <router-link class="hover-yellow" :to="{name: 'Center', query: {id: '_1'}}">立即免费注册</router-link>
                </div>
              </b-tab>
              <b-tab title="快速通道">
                <div class="icon-wrapper">
                  <img src="../assets/image/icon_byss.png">
                </div>
                  <div class="btn-wrapper">
                    <b-button variant="warning" class="block" @click="beginGame">开始游戏</b-button>
                  </div>
                  <div class="to-register">
                    <span>还没有账号？</span>
                    <router-link class="hover-yellow" :to="{name: 'Center', query: {id: '_1'}}">立即免费注册</router-link>
                  </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
        <div class="right">
          <v-bar title="新闻公告" extend="更多 +" @vBarExtendFn="showStrategy"></v-bar>
          <div class="newsinfo clearfix">
            <ul class="newslist">
              <li class="news-item" v-for="(item, index) in newsList" :key="index" v-if="index < 5">
                <span class="pointer"></span>
                <router-link class="text" :to="{name: 'Strategy', query: {id: item.id}}">{{item.title}}</router-link>
              </li>
            </ul>
            <div class="js-Swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../assets/image/NP1-1.jpg">
                </div>
                </div>
                <div class="swiper-pagination" style="cursor: default"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="section section_2">
          <v-bar title="游戏截图"></v-bar>
          <div class="screen-shot-wrapper">
            <img v-for="(item, index) in imgList" :key="index" :src="item.src" v-show="index < currentPage * 2 && index >= (currentPage - 1) * 2">
        </div>
            <div class="pagination-wrapper">
              <b-pagination :total-rows="imgList.length" v-model="currentPage" :per-page="2" hide-goto-end-buttons prev-text="上一页" next-text="下一页"></b-pagination>
            </div>
          </div>
        </div>
        <b-modal v-model="isShowModal" title="温馨提示" ok-only>暂时无法登录</b-modal>
      </div>
</template>
<script>
import Vue from 'vue'
import vBar from '@/components/common/vBar'
import vBanner from '@/components/common/vBanner'
import Swiper from '../../static/swiper2/idangerous.swiper.min.js'
import STATIC from '../assets/js/static'
Vue.component('vBar', vBar)
Vue.component('vBanner', vBanner)

export default {
  name: 'Home',
  data() {
    return {
      currentPage: 1,
      swiper: null,
      imgList: [{
        src: require('../assets/image/PIC4-1.png')
      }, {
        src: require('../assets/image/PIC4-2.png')
      }],
      newsList: STATIC.strategyDisTplList,
      userName: '',
      password: '',
      autoStatus: false,
      isShowModal: false
    }
  },
  methods: {
    showStrategy() {
      // js 跳转路由
      this.$router.push({ name: 'Strategy', query: { id: STATIC.strategyDisTplList[0].id } })
    },
    beginGame() {
      this.$router.push({ name: 'Center', query: { id: STATIC.centerDisTplList[0].id } })
    }
  },
  mounted() {
    this.swiper = new Swiper('.js-Swiper')
  }
}

</script>
<style lang="scss">
@import '../../static/swiper2/idangerous.swiper.css';

.home-container {
  .hover-yellow {
    color: #333;

    &:hover {
      color: #ff6900;
    }
  }
}

.home-container .screen-shot-wrapper {
  display: flex;
  justify-content: space-around;
  padding: 30px 10px 0;
  margin: 0 20px;
}

.home-container .section_1 {
  margin-top: 30px;
  padding-left: 300px;
  height: 250px;

  .left {
    position: absolute;
    height: 330px;
    width: 290px;
    left: 0;
    top: -70px;

    .card {
      height: 100%;
      border: 1px solid #e6e6e6;
    }

    .tabs {
      ul {
        outline: none;
      }

      .nav-tabs {
        display: flex;
        justify-content: center;
      }

      .nav-link {
        color: #ff6900;
        padding: 1.0rem 1.5rem;
        border: none;

        &.active {
          border-bottom: 2px solid #ff6900;
        }
      }

      .tab-pane {
        padding: 30px 20px;
      }

      .form-wrapper {
        height: 75px;
        border: 1px solid #cab8aa;
        border-radius: 5px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .input {
          position: relative;
          height: 50%;
          width: 100%;
          flex: 1;

          &.username {
            border-bottom: 1px solid #cab8aa;
          }

          input {
            height: 100%;
            width: 214px;
            padding-left: 30px;
            font-size: 12px;
          }

          .iconfont {
            position: absolute;
            top: 5px;
            left: 5px;
            color: #cab8aa;
          }
        }
      }

      .checkbox-wrapper {
        margin: 10px 0;
        padding: 10px 15px;
      }

      .to-register {
        * {
          font-size: 14px;
        }

        text-align: center;
        padding: 10px 15px;
        margin-top: 10px;
      }

      .icon-wrapper {
        text-align: center;
        margin-bottom: 30px;

        img {
          width: 100px;
          height: 100px;
        }

      }

      .card-header {
        padding: 0 1.25rem 0.75rem;
        background: #fff;
      }
    }
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

.home-container .section_2 {
  margin-top: 30px;

  .pagination-wrapper {
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
  }
}

</style>
