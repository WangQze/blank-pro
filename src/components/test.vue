<template>
  <div class="bigdiv">
    <button @click="goBack">{{msg}}</button>
  </div>
</template>

<script>
export default{
  name: 'test',
  data () {
    return {
      msg: '返回上一个页面'
    }
  },
  computed: {
    // username () {
    //   // 我们很快就会看到 `params` 是什么
    //   return this.$route.params.username
    // }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style lang = "less" scoped>
</style>
