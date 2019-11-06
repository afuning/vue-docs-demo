<template>
  <div>
    <iframe
      ref="iframeContent"
      width="100%"
      scrolling="no"
      frameborder="0"
      @load="reinitIframe"
      :src='article'>
    </iframe>
  </div>
</template>

<script>
const ROOT_URL = '/doc'
export default {
  name: 'DocIframe',
  data () {
    return {
      isReload: true,
      article: `${ROOT_URL}/鉴权/鉴权.html`
    }
  },
  created () {
    window.addEventListener('message', this.receiveMessageFromIframe, false)
  },
  destroyed () {
    window.removeEventListener('message', this.receiveMessageFromIframe)
  },
  methods: {
    receiveMessageFromIframe  (event) {
      if (event.origin !== location.origin) return
      this.reinitIframe()
      this.resetScroll()
    },
    reinitIframe () {
      var iframeContent = this.$refs.iframeContent
      var bHeight = iframeContent.contentWindow.document.body.scrollHeight
      var documentClientHeight = document.documentElement.clientHeight
      // var dHeight = iframeContent.contentWindow.document.documentElement.scrollHeight
      var height = Math.max(bHeight, documentClientHeight)
      iframeContent.height = height
    },
    getScrollTop () {
      return window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
    },
    resetScroll () {
      const scrollTop = this.getScrollTop()
      if (scrollTop !== 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>