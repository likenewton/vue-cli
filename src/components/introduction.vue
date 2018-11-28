<template>
  <div class="container">
    <v-banner></v-banner>
    <div class="module-core">
      <div class="section section_1 clearfix">
        <div class="left fbs-left">
          <div class="article-list">
            <v-bar title="介绍列表"></v-bar>
            <div class="article-title-list">
              <v-article-title v-for="(item, index) in disTplList" :key="index" :infos="item" @toChoice="renderNewArticle"></v-article-title>
            </div>
          </div>
        </div>
        <div class="right fbs_right">
          <v-bar title="捕鱼介绍"></v-bar>
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

Vue.component('vBar', vBar)
Vue.component('vBanner', vBanner)
Vue.component('vArticleTitle', vArticleTitle)

export default {
  name: 'Home',
  data() {
    return {
      // 这里面有所有的文章，但不一定都需要展示
      tplData: STATIC.tplData,
      // 这里是需要展示的文章
      disTplList: STATIC.disTplList,
      // 当前选定的文章id
      choiceId: STATIC.disTplList[0].id
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
    }
  },
  mounted() {
    this.choiceId = localStorage.getItem('introduction_id') || this.choiceId
    this.$router.push({ name: this.$route.name, query: { id: this.choiceId } })
  },
  watch: {
    '$route': function(newVal, oldVal) {
      if (newVal.query.id) {
        localStorage.setItem('introduction_id', newVal.query.id)
        this.choiceId = newVal.query.id
      }
      this.$router.push({ name: this.$route.name, query: { id: this.choiceId } })
    }
  }
}

</script>
<style scoped lang="scss">
.section_1 {
  margin-top: 30px;
  padding-left: 300px;
  height: 250px;
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
