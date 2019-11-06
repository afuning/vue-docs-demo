export default {
  watch: {
    '$route.path': function (nV) {
      var parent = window.parent
      if (parent) {
        parent.postMessage(JSON.stringify({
          path: nV
        }), '*')
      }
    }
  }
}