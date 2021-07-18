import Guards from './guards';
import Visitors from './visitors';
import Elevators from './elevators';
import Vehicles from './vehicles';

export default [
{
  name:'guards',
  path:'/management-guards',
  component: Guards,
},
{
  name:'visitors',
  path:'/management-visitors',
  component: Visitors,
},
{
  name:'elevators',
  path:'/management-elevators',
  component: Elevators,
},
{
  name:'vehicles',
  path:'/management-vehicles',
  component: Vehicles,
},];
