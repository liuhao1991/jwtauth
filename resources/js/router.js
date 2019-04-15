import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/Index.vue';
import SignIn from './pages/SignIn.vue';
import SignUp from './pages/SignUp.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  }, {
    path: '/signUp',
    name: 'signUp',
    component: SignUp,
  }]
});