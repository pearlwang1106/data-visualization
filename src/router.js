import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import demoRoutes from './views/demo/router';
import homeRoutes from './views/home/router';
import managementRoutes from './views/management/router';
import MonitorRoutes from './views/monitor/router';
import systemRoutes from './views/system/router';

const routes = [
  {
    path: '      /',
    redirect: '/home',
  },
  // ...menuList,
  ...homeRoutes,
  ...demoRoutes,
  ...managementRoutes,
  ...MonitorRoutes,
  ...systemRoutes
];

console.error('routes', routes)

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
