<template>
  <div class="v-banner">
    <div class="qrcode-wrapper">
      <img class="banner_01" src="../../assets/image/banner_01.png">
      <img class="download_logo" src="../../assets/image/icon_byss.png">
      <div id="qrcode"></div>
      <div class="download-btn android-btn" @click="androidDownload"></div>
      <div class="download-btn ios-btn" @click="iosDownload"></div>
    </div>
    <b-modal v-model="isShowModal" title="温馨提示" ok-only>敬请期待</b-modal>
  </div>
</template>
<script>
import STATIC from '../../assets/js/static'
import QRCode from '../../../static/qrcode/qrcode'

export default {
  name: 'vBanner',
  data() {
    return {
      isShowModal: false,
      qrcode: null
    }
  },
  mounted() {
    this.qrcode = new QRCode(document.getElementById('qrcode'), {
      text: STATIC.download.byss.android,
      width: 123,
      height: 123
    })
  },
  methods: {
    iosDownload() {
      if (STATIC.download.byss.ios) {
        window.open(STATIC.download.byss.ios)
      } else {
        this.isShowModal = true
      }
    },
    androidDownload() {
      window.open(STATIC.download.byss.android)
    }
  }
}

</script>
<style scoped lang="scss">
.v-banner {
  position: relative;
  height: 0;
  padding-top: 450px;
  background: url("../../assets/image/banner.jpg") top center no-repeat;

  .qrcode-wrapper {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 598px;
    height: 145px;

    #qrcode {
      position: absolute;
      width: 123px;
      height: 123px;
      top: 12px;
      left: 169px;
    }

    .download_logo {
      position: absolute;
      width: 128px;
      left: 12px;
      top: 9px;
    }
  }

  .download-btn {
    position: absolute;
    left: -22.5%;
    margin-left: 450px;
    height: 70px;
    width: 283px;
    cursor: pointer;

    &.android-btn {
      top: 52%;
    }

    &.ios-btn {
      top: 0;
    }
  }
}

</style>
