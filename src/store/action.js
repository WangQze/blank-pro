export default {
  increment (context) {
    context.commit('increment')
  },
  showLoading (context, res) {
    context.commit('loadShow', res)
  },
  hello (context, res) {
    context.commit('animate', res)
  },
  hellos (context, res) {
    context.commit('transitionName', res)
  }
}
