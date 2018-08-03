<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <loading v-if="show"></loading>
  </div>
</template>

<script>
import loading from '@/components/common/loading'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted: function () {
    this.$store.commit('loadShow', false)
  },
  components: {loading},
  computed: {
    show: function () {
      return this.$store.state.showLoading
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
html {
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}

b {
  font-weight: normal;
}

html {
  min-height: 100%;
}
body {
  padding: 0;
  margin: 0;
  font-weight: normal;
  min-height: 100%;
  background: #ffffff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img,
input,
select {
  vertical-align: middle;
}
input::-ms-clear{display:none;}
input::-ms-reveal{display:none;}
img {
  border: 0;
}
input::-webkit-input-placeholder { /* WebKit browsers */
  color:#bbb;
}
input::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color:#bbb;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:#bbb;
}
input::-ms-input-placeholder { /* Internet Explorer 10+ */
  color:#bbb;
}
textarea::-webkit-input-placeholder { /* WebKit browsers */
  color:#bbb;
}
textarea::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color:#bbb;
}
textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:#bbb;
}
textarea::-ms-input-placeholder { /* Internet Explorer 10+ */
  color:#bbb;
}
li {
  list-style-type: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td {
  padding: 0;
}

input,
button,
select,
textarea {
  outline: none;
  resize: none;
}

a {
  outline: medium none;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: none;
}

/*网上找的页面过度效果*/
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 0.3s;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
  .vux-pop-out-leave-active{
    z-index: 99;
  }
.vux-pop-out-enter {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 1;
  transform: translate3d(0, 100%, 0);
}

.vux-pop-in-enter {
  opacity: 1;
  transform: translate3d(0, 100%, 0);
}

.vux-pop-in-leave-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>
