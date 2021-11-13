<template>
  <div class="index-container">
    <!-- <h1>入口页</h1> -->
    <app-header></app-header>
    <div class="index-bd">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
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
      
    }
  },
  created() {
    
  },
  mounted() {
    
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
