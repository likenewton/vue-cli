<template>
  <div class="v-footer">
    <p>抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防上当受骗。适度游戏益脑，沉迷游戏伤身。</p>
    <div class="foot_nav">
      <ul>
        <li><router-link :to="{name: 'About', query: {id: '_1'}}">公司介绍</router-link></li>
        <li><router-link :to="{name: 'About', query: {id: '_2'}}">用户协议</router-link></li>
        <li><router-link :to="{name: 'About', query: {id: '_3'}}">家长监护工程</router-link></li>
        <li><router-link :to="{name: 'About', query: {id: '_4'}}">用户纠纷处理</router-link></li>
        <li><router-link :to="{name: 'About', query: {id: '_5'}}">网络游戏服务格式化协议必备条款</router-link></li>
      </ul>
    </div>
    <p>
      <span>北京麦麦畅游科技有限公司&nbsp;&nbsp;</span>
      <span>联系电话：0898-36690405&nbsp;&nbsp;</span>
      <span>联系地址：北京市朝阳区北苑路170号3号楼7层1单元801-77</span>
    </p>
    <p>
      <span>文化部网络游戏举报和联系电子邮箱：</span>
      <a href="mailto:wlwh@vip.sina.com">wlwh@vip.sina.com&nbsp;&nbsp;</a>
      <span>纠纷处理方式：联系客服或依《用户协议》约定方式处理</span>
    </p>
    <p class="youxidzbq">
      <a href="/static/image/wenwangwen1.jpg" target="_blank">京网文 [2015] 2363-454号&nbsp;&nbsp;</a>
      <a href="http://www.miitbeian.gov.cn" target="_blank">京ICP备16007680号&nbsp;&nbsp;</a>
      <span>文网游备字〔2017〕Ｍ-CSG 2408 号</span>
      <a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/gameNetTag/4028c08c5eb84138015eb8a7bd0d070a" target="_blank">
        <img src="../../assets/image/youxidzbq.png" width="36" alt="">
      </a>
    </p>
    <div class="rz">
      <a class="rz1" href="">
        <img src="../../assets/image/rz.png">
      </a>
      <a class="rz2" href="">
        <img src="../../assets/image/rz.png">
      </a>
      <a class="rz3" href="">
        <img src="../../assets/image/rz.png">
      </a>
      <a class="rz4" href="">
        <img src="../../assets/image/rz.png">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vFooter',
  data () {
    return {}
  }
}

</script>
<style scoped lang="scss">
.v-footer {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 50px;
  line-height: 24px;
  font-size: 12px;
  text-align: center;
  border-top: 2px solid #ff6900;
  * {
    font-size: 12px;
  }
  .foot_nav {
    padding: 10px 0;
    li {
      display: inline-block;
      padding: 0 18px;
      border-right: 1px dashed #7d7d7d;
      line-height: 16px;
      height: 16px;
      &:last-child {
        border-right: none;
      }
      a {
        color: #ff6900;
      }
      a:hover {
        color: #ff6900;
        text-decoration: underline;
      }
    }
  }
  p {
    color: #8c8c8c;
    a {
      color: #8c8c8c;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .rz {
    a {
      width: 36px;
      height: 36px;
      display: inline-block;
      margin: 0 5px;
      overflow: hidden;
    }
    .rz1 img {
      margin-left: -5px;
      margin-top: -2px;
    }
    .rz2 img {
      margin-left: -53px;
      margin-top: -2px;
    }
    .rz3 img {
      margin-left: -101px;
      margin-top: -2px;
    }
    .rz4 img {
      margin-left: -145px;
      margin-top: -2px;
    }
  }
  .youxidzbq {
    margin: 20px 0;
    img {
      vertical-align: middle;
      margin-left: 10px;
    }
  }
}

</style>
