<template>
  <div class="news-container">
    <h1>新闻资讯</h1>
    <input type="text" v-model="text" />
  </div>
</template>

<script>
export default {
  name: 'news', // 与路由名称保持一致（用来激活keep-alive）
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
