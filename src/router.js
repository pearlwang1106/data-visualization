import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
 
import demoRoutes from './views/demo/router';

const routes = [
  {
    path:'/',
    redirect:'/demo'
  },
  ...demoRoutes,
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
