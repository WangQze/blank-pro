<template>
  <div class="loading">
    <div class="loading-box">
      <img src="./../../assets/36.gif" alt="">
      <p>正在加载....</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loading{
  position: fixed;
  top:0;
  left:0;
  z-index:121;
  width: 100%;
  height: 100%;
  // background: rgba(0,0,0,0.3);
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.loading img{
  // margin:5rem auto;
}
.loading-box {
  width: 220px;
  height: 220px;
  position: absolute;
  background: rgba(40,40,40,.8);
  left: 50%;
  top: 50%;
  margin-top: -110px;
  margin-left: -110px;
  border-radius: 20px;
  img{
    width: 72px;
    margin-top: 36px;
  }
  p {
    color: #ffffff;
    margin-top: 36px;
  }
}
</style>
