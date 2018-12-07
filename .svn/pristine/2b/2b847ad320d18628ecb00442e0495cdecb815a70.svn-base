<template>
  <div class="containers">
    <v-banner></v-banner>
    <div class="module-core">
      <div class="section section_1 clearfix">
        <div class="left fbs-left">
          <div class="article-list">
            <v-bar title="关于我们"></v-bar>
            <div class="article-title-list">
              <v-article-title v-for="(item, index) in disTplList" :key="index" :infos="item" @toChoice="renderNewArticle"></v-article-title>
            </div>
          </div>
        </div>
        <div class="right fbs_right">
          <v-bar :title="articleTitle ? articleTitle.title : '404-没有找到对应的文章'"></v-bar>
          <div class="article-container" v-html="articleTpl"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import STATIC from '../assets/js/static'
import Vue from 'vue'
import vBar from '@/components/common/vBar'
import vBanner from '@/components/common/vBanner'
import vArticleTitle from '@/components/common/vArticleTitle'
import { mapMutations, mapState } from 'vuex'

Vue.component('vBar', vBar)
Vue.component('vBanner', vBanner)
Vue.component('vArticleTitle', vArticleTitle)

export default {
  name: 'About',
  data() {
    return {
      // 这里面有所有的文章，但不一定都需要展示
      tplData: STATIC.aboutTplData,
      // 这里是需要展示的文章
      disTplList: STATIC.aboutDisTplList
    }
  },
  methods: {
    renderNewArticle(id) {
      this.SET_ABOUT_ID({id})
    },
    ...mapMutations([
      'SET_ABOUT_ID'
    ])
  },
  computed: {
    ...mapState({
      // 当前选定的文章id
      choiceId: 'aboutId'
    }),
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
      this.SET_ABOUT_ID({
        id: this.$route.query.id
      })
    } else {
      // BUG 使用nav切换到这里，路由自动跳转之后无法使用回退按钮了
      this.$router.replace({ name: this.$route.name, query: { id: this.choiceId } })
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  watch: {
    '$route': function(newVal, oldVal) {
      if (newVal.query.id) {
        this.SET_ABOUT_ID({
          id: newVal.query.id
        })
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
  }
}

</style>
