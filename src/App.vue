<template>
  <div id="app">
    <doc-iframe />
  </div>
</template>

<script>
import DocIframe from './components/doc-iframe.vue'

export default {
  name: 'app',
  components: {
    DocIframe
  }
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
