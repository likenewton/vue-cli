<template>
  <div class="container">
    <v-banner></v-banner>
    <div class="module-core">
      <div class="section section_1 clearfix">
        <div class="left fbs-left">
          <div class="article-list">
            <v-bar title="介绍列表"></v-bar>
            <div class="article-title-list">
              <v-article-title></v-article-title>
              <v-article-title></v-article-title>
              <v-article-title></v-article-title>
            </div>
          </div>
        </div>
        <div class="right fbs_right">
          <v-bar title="捕鱼介绍"></v-bar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
    return {}
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
