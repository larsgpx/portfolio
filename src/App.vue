<template>
  <div id="app">
    <img src="./assets/logo.png">
    <BaseTemplate/>
  </div>
</template>

<script>
import BaseTemplate from './components/BaseTemplate'

export default {
  name: 'App',
  components: {
    BaseTemplate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
