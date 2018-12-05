<template>
  <div class="containers">
    <div class="module-core">
      <div class="section section_1">
        <div class="left fbs-left">
          <img src="../assets/image/icon_byss.png" class="logo">
        </div>
          <div class="right fbs-right">
            <div class="name bold">游戏名称：捕鱼圣手</div>
            <div class="level">
              <span class="bold">玩家推荐评星：</span>
              <span class="star">
                <i class="iconfont">&#xe632;</i>
                <i class="iconfont">&#xe632;</i>
                <i class="iconfont">&#xe632;</i>
                <i class="iconfont">&#xe632;</i>
                <i class="iconfont">&#xe632;</i>
              </span>
            </div>
            <div class="bold">
              <span class="fbs-left bold">游戏简介：</span>
              <span class="fbs-right">《捕鱼圣手》 是一款休闲游戏。以深海捕鱼为背景的，有各种炫酷炮台以及丰富的场景每个场景还有特殊boss等你来战。</span>
            </div>
            <div class="zan">
              <span class="heart">
                <span class="iconfont">&#xe65c;</span>
              </span>
              <span>645032人赞过</span>
            </div>
            <div class="btns-wrapper">
              <b-button variant="warning" @click="downloadAndroid">
                <span class="icon icon-android"></span>
                <span class="text">安卓下载</span>
              </b-button>
              <b-button variant="warning" @click="downloadIos">
                <span class="icon icon-ios"></span>
                <span class="text">苹果下载</span>
              </b-button>
            </div>
            <div class="qrcode-wrapper">
              <div id="qrcode"></div>
            </div>
          </div>
        </div>
        <div class="section section_2">
          <v-bar title="详情"></v-bar>
          <div class="screen-shot-wrapper">
            <img v-for="(item, index) in imgList" :key="index" :src="item.src" v-show="index < currentPage * 2 && index >= (currentPage - 1) * 2">
        </div>
            <div class="pagination-wrapper">
              <b-pagination :total-rows="5" v-model="currentPage" :per-page="2" hide-goto-end-buttons prev-text="上一页" next-text="下一页"></b-pagination>
            </div>
          </div>
        </div>
        <b-modal v-model="isShowModal" title="温馨提示" ok-only>敬请期待</b-modal>
      </div>
</template>
<script>
import Vue from 'vue'
import vBar from '@/components/common/vBar'
import STATIC from '../assets/js/static'
import QRCode from '../../static/qrcode/qrcode'

Vue.component('vBar', vBar)

export default {
  name: 'Download',
  data() {
    return {
      imgList: [{
        src: require('../assets/image/BPIC-1.jpg')
      }, {
        src: require('../assets/image/BPIC-2.jpg')
      }, {
        src: require('../assets/image/BPIC-3.jpg')
      }, {
        src: require('../assets/image/BPIC-4.jpg')
      }, {
        src: require('../assets/image/BPIC-5.jpg')
      }],
      currentPage: 1,
      isShowModal: false
    }
  },
  methods: {
    downloadAndroid() {
      window.open(STATIC.download.byss.android)
    },
    downloadIos() {
      if (STATIC.download.byss.ios) {
        window.open(STATIC.download.byss.ios)
      } else {
        this.isShowModal = true
      }
    }
  },
  mounted() {
    this.qrcode = new QRCode(document.getElementById('qrcode'), {
      text: STATIC.download.byss.android,
      width: 84,
      height: 84
    })
  }
}

</script>
<style scoped lang="scss">
.screen-shot-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 10px 0;
  margin: 0 20px;
}

.section_1 {
  position: relative;
  margin-top: 15px;
  width: 100%;
  height: 300px;
  background: #f3f3f3;
  padding: 35px 161px 35px 35px;

  .left {
    width: 275px;
    height: 100%;

    img {
      width: 230px;
      height: 230px;
    }
  }

  .right {
    height: 100%;

    * {
      font-size: 14px;
      color: #666;
    }

    >div {
      margin: 5px 0;
    }

    .level {
      .iconfont {
        font-size: 14px;
        vertical-align: top;
      }
    }

    .zan {
      margin-top: 40px;

      .heart {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #e92322;
        vertical-align: top;
        text-align: center;
        line-height: 25px;
        .iconfont {
          font-size: 15px;
        }
      }

      span {
        display: inline-block;
        height: 25px;
        line-height: 25px;
        color: #e92322;
      }
    }

    .btns-wrapper {
      margin-top: 20px;

      * {
        color: #fff;
      }

      button {
        padding-left: 50px;
        padding-right: 25px;
        position: relative;
        margin-right: 10px;
      }

      .icon {
        position: absolute;
        background-repeat: no-repeat;
        width: 20px;
        height: 24px;
        left: 20px;
        top: 4px;

        &.icon-android {
          background: url('../assets/image/ddzgw_icon.png') 47px 0;
        }

        &.icon-ios {
          background: url('../assets/image/ddzgw_icon.png') 21px 0;
        }
      }
    }

    .qrcode-wrapper {
      position: absolute;
      width: 100px;
      height: 100px;
      background: #fff;
      right: 40px;
      top: 98px;
      padding: 8px;

      #qrcode {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.section_2 {
  margin-top: 15px;

  .pagination-wrapper {
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
  }
}

</style>
