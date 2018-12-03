<template>
  <div class="containers">
    <v-banner></v-banner>
    <div class="module-core">
      <div class="section section_1 clearfix">
        <div class="left fbs-left">
          <div class="article-list">
            <v-bar title="用户中心列表"></v-bar>
            <div class="article-title-list">
              <v-article-title v-for="(item, index) in disTplList" :key="index" :infos="item" @toChoice="renderNewArticle"></v-article-title>
            </div>
          </div>
        </div>
        <div class="right fbs_right">
          <v-bar :title="articleTitle ? articleTitle.title : '404-没有找到对应的文章'"></v-bar>
          <!-- 静态的文件 -->
          <div class="article-container" v-html="articleTpl"></div>
          <!-- 非静态的文件 -->
          <div class="article-container" v-show="choiceId == '_1'">
            <div class="tpl-article">
              <div class="p">* 以下内容我们承诺你的信息安全，决不会透露给第三方。</div>
              <b-container fluid>
                <b-row class="item-1 item p">
                  <label>账号昵称：</label>
                  <b-col sm="5">
                    <b-form-input type="text"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="item-1 item p">
                  <label>设置密码：</label>
                  <b-col sm="5">
                    <b-form-input type="password"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="item-1 item p">
                  <label>确认密码：</label>
                  <b-col sm="5">
                    <b-form-input type="password"></b-form-input>
                  </b-col>
                </b-row>
                <div class="p indent">根据2010年8月1日实施的《网络游戏管理暂行办法》，网络游戏用户需要使用有效的身份证件进行实名注册，为保证流畅游戏体验，享受健康游戏生活，请广大玩家尽快实名注册。</div>
                <b-row class="item-1 item p">
                  <label>真实姓名：</label>
                  <b-col sm="5">
                    <b-form-input type="text"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="item-1 item p">
                  <label>身份证号：</label>
                  <b-col sm="5">
                    <b-form-input type="text"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="checkbox-wrapper p">
                  <b-col class="offset-sm-1">
                    <b-form-checkbox>我已阅读并同意《麦麦畅游通行证协议》</b-form-checkbox>
                  </b-col>
                </b-row>
                <b-row class="p">
                  <b-col class="offset-sm-1" sm="5">
                    <b-button variant="warning block" @click="isShowModal=true">马上注册</b-button>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="isShowModal" title="温馨提示" ok-only>{{modalMsg}}</b-modal>
  </div>
</template>
<script>
import STATIC from '../assets/js/static'
import Vue from 'vue'
import vBar from '@/components/common/vBar'
import vBanner from '@/components/common/vBanner'
import vArticleTitle from '@/components/common/vArticleTitle'

Vue.component('vBar', vBar)
Vue.component('vBanner', vBanner)
Vue.component('vArticleTitle', vArticleTitle)

export default {
  name: 'Center',
  data() {
    return {
      // 这里面有所有的文章，但不一定都需要展示
      tplData: STATIC.centerTplData,
      // 这里是需要展示的文章
      disTplList: STATIC.centerDisTplList,
      // 当前选定的文章id
      choiceId: STATIC.centerDisTplList[0].id,
      // 是否展示弹框组件（vue-bootstrap）
      isShowModal: false,
      // modal展示的信息
      modalMsg: '此功能尚未开放！'
    }
  },
  methods: {
    renderNewArticle(id) {
      this.choiceId = id
    }
  },
  computed: {
    articleTpl() {
      return this.tplData[this.choiceId]
    },
    articleTitle() {
      let obj = {}
      this.disTplList.forEach((v) => {
        if (v.id === this.choiceId) {
          obj = v
          return false
        }
      })
      return obj
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.choiceId = this.$route.query.id
    } else {
      this.choiceId = localStorage.getItem('center_id') || this.choiceId
    }
    this.$router.push({ name: this.$route.name, query: { id: this.choiceId } })
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  watch: {
    '$route': function(newVal, oldVal) {
      if (newVal.query.id) {
        localStorage.setItem('center_id', newVal.query.id)
        this.choiceId = newVal.query.id
      }
      this.$router.push({ name: this.$route.name, query: { id: this.choiceId } })
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}

</script>
<style scoped lang="scss">
.section_1 {
  margin-top: 30px;
  padding-left: 300px;
  min-height: 666px;

  .left {
    width: 300px;
    margin-left: -300px;

    .article-list {
      display: inline-block;
      width: 290px;
      height: 666px;
      background: #f3f3f3;
      border-radius: 5px;

      .article-title-list {
        padding: 0 30px;
      }
    }
  }

  .right {
    width: 100%;

    .container-fluid {
      .item {
        line-height: 38px;
      }
    }
  }
}

</style>
