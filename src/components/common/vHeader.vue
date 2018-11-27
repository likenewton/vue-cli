<template>
  <div class="v-header clearfix" @mouseout="isShowSubMenu=false">
    <div class="main-menu clearfix">
      <div class="module-core clearfix">
        <div class="logo-wrapper fl">
          <img src="../../assets/image/logo.png" alt="">
        </div>
          <ul class="nav-list fr clearfix">
            <li v-for="(item, index) in list" :key="index" @mouseover="getHoverItem(item.subMenu)">
              <a :class="{active: item.active}" :href="item.href || 'javascript:'">{{item.text}}</a>
            </li>
          </ul>
        </div>
      </div>
      <transition name="slide">
        <div class="sub-menu clearfix" v-show="isShowSubMenu" @mouseover="isShowSubMenu=true">
          <div class="module-core">
            <ul class="sub-nav-list clearfix">
              <li v-for="(subItem, subIndex) in hoverItem" :key="subIndex">
                <a :href="subItem.href || 'javascript:'">{{subItem.text}}</a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
export default {
  name: 'vHeader',
  data() {
    return {
      // 主菜单列表
      list: [{
        text: '首页',
        active: true
      }, {
        text: '游戏介绍'
      }, {
        text: '游戏攻略'
      }, {
        text: '游戏下载',
        subMenu: [{
          text: '全名英雄欢乐斗地主'
        }, {
          text: '麻将高手'
        }]
      }, {
        text: '用户中心',
        subMenu: [{
          text: 'Newton'
        }, {
          text: 'Ailsa'
        }]
      }, {
        text: '关于我们'
      }],
      // 被选中的item
      hoverItem: [],
      // 是否显示submenu
      isShowSubMenu: false
    }
  },
  methods: {
    getHoverItem(data) {
      if (data) {
        this.isShowSubMenu = true
        this.hoverItem = data
      } else {
        this.isShowSubMenu = false
      }
    }
  }
}

</script>
<style scoped lang="scss">
.v-header {
  position: relative;
  height: 50px;

  .logo-wrapper {
    margin-left: 8%;
    height: 100%;
    padding: 10px 0;
    width: 130px;
  }

  ul {
    height: 100%;

    &.nav-list {
      margin-right: 6%;
    }

    &.sub-nav-list {
      li {

        a.active,
        a:hover {
          border: none;
        }

        &::after {
          display: none;
        }
      }
    }

    li {
      float: left;
      height: 100%;

      a {
        float: left;
        color: #666;
        height: 50px;
        line-height: 50px;
        padding: 0 14px;

        &.active,
        &:hover {
          color: #ff6900;
          border-bottom: 4px solid #ff6900;
        }
      }
    }

    li::after {
      content: '.';
      color: #666;
      font-size: 20px;
      display: inline-block;
      margin-top: 8px;
    }

    li:last-of-type::after {
      display: none;
    }
  }
}

.main-menu {
  position: relative;
  z-index: 9;
  background: #eee;
}

.sub-menu {
  position: absolute;
  width: 100%;
  top: 50px;
  z-index: 8;
  height: 46px;
  background: rgba(255, 255, 255, 0.7);
}

.slide-enter-active,
.slide-leave-active {
  transition: all .8s;
}

.slide-enter,
.slide-leave-to {
  top: 0;
}

</style>
