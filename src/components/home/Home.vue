<template>
  <section>
    <h1>Twitch Feed</h1>
    {{twitchResults}}
  </section>
</template>

<script>
import api from '../../services/api';
export default {
  data() {
    return {
      twitchResults: null
    };
  },
  created() {
    api.getTwitchFeed() 
      .then(twitchResults => this.twitchResults = twitchResults);
  }
};
</script>

<style scoped>
  
</style>