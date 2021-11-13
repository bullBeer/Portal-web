<template>
  <div class="app-header">
    <div class="header-container">
      <div class="header-bd">
        <div class="logo"></div>
        <nav class="nav-list">
          <router-link :class="{current: $route.name === item.name}" :to="{name: item.name}" v-for="(item, i) in navList" :key="i">{{item.label}}</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'appHeader',
  data() {
    return {
      navList: [
        {name: 'product', label: '产品中心'},
        {name: 'news', label: '新闻资讯'},
        {name: 'aboutUs', label: '关于我们'},
      ]
    }
  },
  created () {
    
  },
  methods: {

  },

}
</script>

<style lang="less" scoped>
  .app-header{
    height: 60px;
  }
  .header-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 10;
    background-color: #333;
    height: 60px;
  }
  .header-bd{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
      width: 40px;
      height: 40px;
      background-color: #ccc;
      border-radius: 6px;
    }
    .nav-list{
      font-size: 18px;
      display: flex;
      justify-content: flex-end;
      a{
        display: block;
        color: #fff;
        text-decoration: none;
        outline: none;
        margin-left: 100px;
        position: relative;
        height: 60px;
        line-height: 60px;
        &:after{
          content: "";
          position: absolute;
          left: 50%;
          bottom: 5px;
          height: 3px;
          width: 3em;
          background-color: transparent;
          transform: translateX(-50%);
        }
        &.current{
          &:after{
            background-color: #fff;
          }
        }
      }
    }
  }
</style>

