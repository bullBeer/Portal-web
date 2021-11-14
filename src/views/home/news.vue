<template>
  <div class="news-container">
    <h1>新闻资讯</h1>
    <input type="text" v-model="text" />
  </div>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
      text: 'keep-alive测试'
    }
  },
  created () {

  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
  
</style>
