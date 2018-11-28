<template>
  <div class="v-article-title pointer">
    <img class="logo" src="../../assets/image/logo_01.png">
    <span class="text ellipsis">我是新闻的标题我是新闻的标题我是新闻的标题我是新闻的标题我是新闻的标题</span>
    <span class="date">2018-01-05</span>
  </div>
</template>
<script>
export default {
  name: 'vArticleTitle',
  data() {
    return {}
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
    padding-left: 36px;
    padding-right: 70px;
  }

  * {
    color: #666;
    font-size: 12px;
  }
}

</style>
