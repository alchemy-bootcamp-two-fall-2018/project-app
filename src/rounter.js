import VueRouter from 'vue-router';
import Home from './src/components/Home.vue';

export default new VueRouter({
    routes: [
        { path: '/', component: Home }, 
        { path: '*', redirect: '/' }
    ]

});