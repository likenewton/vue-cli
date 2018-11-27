<template>
  <div class="v-bar">
    <span class="border"></span>
    <span class="title">{{title}}</span>
    <div class="extend pointer" v-if="extend" @click="$emit('vBarExtendFn')">{{extend}}</div>
  </div>
</template>
<script>
export default {
  name: 'vBar',
  data() {
    return {}
  },
  props: ['title', 'extend']
}

</script>
<style scoped lang="scss">
$red: #e92322;

.v-bar {
  position: relative;
  width: 100%;
  height: 45px;
  background: #f3f3f3;
  padding: 0 30px;

  * {
    line-height: 45px;
  }

  .border {
    display: inline-block;
    border-radius: 5px;
    width: 5px;
    height: 12px;
    background: $red;
    margin-right: 6px;
    vertical-align: initial;
  }

  .title {
    color: $red;
  }

  .extend {
    position: absolute;
    height: 100%;
    padding: 0 10px;
    top: 0;
    right: 30px;
    color: $red;
    opacity: 0.5;

    &:hover {
      opacity: 1.0;
    }
  }
}

</style>
