import Fire from './fire-monitoring';
import Electronic from './electronic-patrol';
import Security from './security-monitoring';
import Help from './help';
import Environmental from './environmental-monitoring';

export default [
{
  name:'fire',
  path:'/monitor-fire-monitoring',
  component: Fire,
}, {
  name:'security',
  path:'/monitor-security-monitoring',
  component: Security,
}, {
  name:'help',
  path:'/monitor-help',
  component: Help,
}, {
  name:'electronic',
  path:'/monitor-electronic-patrol',
  component: Electronic,
}, {
  name:'environmental',
  path:'/monitor-environmental-monitoring',
  component: Environmental,
}];
