import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

// import { map } from 'lodash';
// import { MENUS } from './utils/data';
 
import demoRoutes from './views/demo/router';
import homeRoutes from './views/home/router';
import managementRoutes from './views/management/router';
import MonitorRoutes from './views/monitor/router';
import systemRoutes from './views/system/router';

// const menuList = map(MENUS, (item, key) => {
//   return {
//     name: key,
//     path: `/${key}`,
//   };
// });

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  // ...menuList,
  ...homeRoutes,
  ...demoRoutes,
  ...managementRoutes,
  ...MonitorRoutes,
  ...systemRoutes
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
