import Index from './index';
import Guards from './guards';
import Visitors from './visitors';
import Elevators from './elevators';
import Vehicles from './vehicles';

// children: [{
//   value: 'guards',
//   label: '门禁监控',
// }, {
//   value: 'visitors',
//   label: '访客管理',
// }, {
//   value: 'elevators',
//   label: '电梯监控',
// }, {
//   value: 'vehicles',
//   label: '车辆管理',
// }],

export default [{
	name:'management',
	path:'/management',
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
