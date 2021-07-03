import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
 
import demoRoutes from './views/demo/router';
import homeRoutes from './views/home/router';

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  ...homeRoutes,
  ...demoRoutes,
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
