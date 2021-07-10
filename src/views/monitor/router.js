import Index from './index';
import Fire from './fire-monitoring';
import Electronic from './electronic-patrol';
import Security from './security-monitoring';
import Help from './help';
import Environmental from './environmental-monitoring';

export default [{
	name:'monitor',
  path:'/monitor',
  redirect: '/monitor/fire-monitoring',
  component: Index,
  children: [
    {
      name:'fire',
      path:'fire-monitoring',
      component: Fire,
    }, {
      name:'security',
      path:'security-monitoring',
      component: Security,
    }, {
      name:'help',
      path:'help',
      component: Help,
    }, {
      name:'electronic',
      path:'electronic-patrol',
      component: Electronic,
    }, {
      name:'environmental',
      path:'environmental-monitoring',
      component: Environmental,
    }
  ],
}];
