<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li class="new-li">
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div> -->
  <div>
    <button id="content" @click="search">{{content}}</button>
    <router-link to="/test">{{nextclick}}</router-link>
  </div>
</template>

<script>
import {search} from '@/api/getDate'
import $ from 'jquery'
$(function () {
  console.log($('#content').text())
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: '点击调用接口',
      nextclick: '另一个页面'
    }
  },
  methods: {
    async search () {
      // console.log(1)
      let urlname = '/api.php'
      let param = {
      }
      let res = await search(urlname, param)
      console.log(res)
      // this.list = res.data.data
      // this.foldernum = 0
      // this.filednum = 0
      // this.list.forEach((value, key) => {
      //   if (value.type !== '1') {
      //     this.foldernum ++
      //   } else {
      //     this.filednum ++
      //   }
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.new-li {
  font-size: 20px;
  a {
    font-size: 20px;
    color: red
  }
}
#content {
  font-size: 30px;
}
</style>
