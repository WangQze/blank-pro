import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)
const state = {
  // dmgjiau
  transitionName: '',
  animate: false,
  // 用户
  user: {
    userid: '0000',
    username: '还没想好',
    userimg: '',
    born: '2018-01-01',
    sex: '保密',
    graduate: '',
    favorite: '',
    memo: 'ta什么都没留下'
  },
  // 左边导航状态
  leftContent: false,
  // 左边菜单选项状态
  leftNav: {
    first: true,
    second: false,
    third: false
  },
  // 退出
  logOut: false,
  count: 0,
  showLoading: true,
  // 头像预览
  file: '',
  // 新增文件
  data: {},
  // 排序完成的文件
  list: [],
  // 搜索文字
  keyWord: '',
  // 用户头像
  headImg: '',
  // 分享图片的链接
  shareImg: ''
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
