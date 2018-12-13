<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <Routerview></Routerview>
  </div>
</template>

<script>
import api from '../services/api.js';

export default {
  data() {
    return {
      result: null
    };
  },
  name: 'app',
  components: { 
  },
  created() {
    api.test().then(result => this.result = result);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
