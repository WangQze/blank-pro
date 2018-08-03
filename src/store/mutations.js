export default {
  changeUser (state, user) {
    state.user = user
  },
  leftNav (state, project) {
    state.leftNav = project
  },
  leftContent (state, project) {
    state.leftContent = project
  },
  logOut (state, project) {
    state.logOut = project
  },
  increment (state) {
    state.count++
  },
  loadShow (state, res) {
    state.showLoading = res
  },
  showImg (state, file) {
    state.file = file
  },
  listData (state, project) {
    state.data = project
  },
  sortList (state, project) {
    state.list = project
  },
  keyWord (state, project) {
    state.keyWord = project
  },
  headImg (state, project) {
    state.headImg = project
  },
  animate (state, res) {
    state.animate = res
  },
  transitionName (state, res) {
    state.transitionName = res
  },
  share (state, res) {
    state.shareImg = res
  }
}
