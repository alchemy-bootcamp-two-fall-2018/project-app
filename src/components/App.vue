<template>
  <div id="app">
    <Home/>
    <RouterView></RouterView>
    {{result}}
  </div>
</template>

<script>
import Home from './Home'
import api from '../services/api';

export default {
  data() {
    return {
      result: null

    }
  },
  components: {

    Home
    
  }, 
  created() {
    api.test()
      .then(result => this.result = result);
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
