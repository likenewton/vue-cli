<template>
  <div class="v-header">
    <ul class="nav-list">
      <li v-for="(item, index) in list" :key="index">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'vHeader',
  data () {
    return {
      list: [{
        text: '首页'
      }, {
        text: '游戏产品'
      }, {
        text: '客服中心'
      }, {
        text: '关于我们'
      }, {
        text: '用户协议'
      }]
    }
  }
}

</script>
<style scoped>
</style>
