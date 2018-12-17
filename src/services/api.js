export default {
  getTwitchFeed() {
    return fetch('/api/twitch')
      .then(response => response.json());
  }
};
