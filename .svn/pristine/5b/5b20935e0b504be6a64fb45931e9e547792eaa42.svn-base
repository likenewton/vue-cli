<template>
  <div class="v-article-title pointer" @click="$emit('toChoice', infos.id)">
    <router-link :to="{name: routeName, query: {id: infos.id}}">
      <img class="logo" :src="infos.logo" v-if="infos.logo">
      <i class="iconfont" v-if="infos.icon" v-html="infos.icon"></i>
      <span class="text ellipsis" :class="{'no-date': !infos.date}">{{infos.title}}</span>
      <span class="date" v-if="infos.date">{{infos.date}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'vArticleTitle',
  data() {
    return {
      routeName: ''
    }
  },
  props: ['infos'],
  created() {
    this.routeName = this.$route.name
  }
}

</script>
<style scoped lang="scss">
$activeColor: #ff6900;

.v-article-title {
  position: relative;
  width: 100%;
  height: 53px;
  line-height: 53px;
  border-bottom: 1px dashed #ccc;

  .router-link-active {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .router-link-exact-active {
    border-bottom: 2px solid $activeColor;
    * {
      color: $activeColor;
    }
  }

  .iconfont {
    font-size: 24px;
  }

  &:hover {
    * {
      color: $activeColor;
    }
  }

  .logo {
    position: absolute;
    left: 0;
    top: 12px;
    width: 28px;
    height: 28px;
  }

  .date {
    position: absolute;
    top: 0;
    right: 0;
    height: 53px;
  }

  .text {
    position: absolute;
    width: 100%;
    top: 0;
    padding-left: 36px;
    padding-right: 70px;
    &.no-date {
      padding-right: 15px;
    }
  }

  * {
    color: #666;
    font-size: 12px;
  }
}

</style>
