import VueRouter from 'vue-router';

export default new VueRouter({
  // mode: 'history',
  routes: [
    // { path: '/', component: Home },
   
    { path: '*', redirect: '/' }
  ]
});