<template>
  <div class="v-qrcode" v-show="isShowQrcode">
    <p>官方微信</p>
    <div class="qrcode_img"><img src="../../assets/image/qrcode.png"></div>
      <a class="close" href="#" @click="closeQrcode"></a>
    </div>
</template>
<script>
export default {
  name: 'vQrcode',
  data() {
    return {
      isShowQrcode: true
    }
  },
  mounted() {
    this.isShowQrcode = true
  },
  methods: {
    closeQrcode() {
      this.isShowQrcode = false
    }
  }
}

</script>
<style scoped lang="scss">
.v-qrcode {
  position: fixed;
  bottom: 5%;
  left: 50%;
  margin-left: 520px;
  width: 103px;
  height: 119px;
  border: 1px solid #ffc094;
  background: #fff;
  z-index: 99;

  >p {
    color: #e77817;
    font-size: 12px;
    line-height: 16px;
    padding-top: 2px;
    text-align: center;
  }

  .qrcode_img {
    width: 99px;
    height: 99px;
    margin: 0 auto;
  }

  .close {
    width: 16px;
    height: 16px;
    background: url(../../assets/image/ddzgw_icon.png) 0 -260px no-repeat;
    position: absolute;
    right: -1px;
    top: -1px;
  }
}

</style>
