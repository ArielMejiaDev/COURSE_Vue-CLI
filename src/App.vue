<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ToggleList/>
    <!-- <SimpleList/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SimpleList from './components/SimpleList'
import ToggleList from './components/ToggleList'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    //SimpleList,
    ToggleList
  }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
