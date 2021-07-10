import Index from './index';
import Guards from './guards';
import Visitors from './visitors';
import Elevators from './elevators';
import Vehicles from './vehicles';

export default [{
	name:'management',
  path:'/management',
  redirect: '/management/guards',
  component: Index,
  children: [
    {
      name:'guards',
      path:'guards',
      component: Guards,
    },
    {
      name:'visitors',
      path:'visitors',
      component: Visitors,
    },
    {
      name:'elevators',
      path:'elevators',
      component: Elevators,
    },
    {
      name:'vehicles',
      path:'vehicles',
      component: Vehicles,
    },
  ],
}];
