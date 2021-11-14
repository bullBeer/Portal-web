<template>
  <div class="index-container">
    <!-- <h1>入口页</h1> -->
    <app-header></app-header>
    <div class="index-bd">
      <keep-alive :include="includes">
        <router-view></router-view>
      </keep-alive>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { storage, keepAlive } from '@/utils/cache'
import appHeader from '@/components/main/appHeader'
import appFooter from '@/components/main/appFooter'

export default {
  name: 'index',
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {
      includes: keepAlive.includes,
      cloneIncluds: JSON.parse(JSON.stringify(keepAlive.includes)),
    }
  },
  watch: {
    '$route'(to, from){
      // 已关闭的keep-alive的路由，重新开启keep-alive
      if (this.cloneIncluds.indexOf(to.name) > -1 && this.includes.indexOf(to.name) < 0) {
        this.includes.push(to.name);
      }
    }
  },
  created() {
    this.eventBus.$on('removeKeepAlive', routerName => {
      this.includes.splice(this.includes.findIndex(item => item === routerName), 1);
    });
  },
  mounted() {
    
  },
  destroyed() {
    this.eventBus.$off('removeKeepAlive');
  },
  destroyed() {
    
  },
  methods: {
    
  },
}
</script>

<style scoped lang="less">
  .index-container{

  }
  .index-bd{
    min-height: 1000px;
    padding-top: 60px;
  }
</style>
