// 菜单
export const MENUS = [{
    label: '首页',
    value: 'home',
    icon: require('../assets/icon-home.png')
  },
  {
    label: '出入管理',
    icon: require('../assets/icon-manage.png'),
    value: 'management',
    children: [{
      value: 'guards',
      label: '门禁监控',
    }, {
      value: 'visitors',
      label: '访客管理',
    }, {
      value: 'elevators',
      label: '电梯监控',
    }, {
      value: 'vehicles',
      label: '车辆管理',
    }],
  },
  {
    value: 'monitor',
    label: '监控预警',
    icon: require('../assets/icon-monitor.png'),
    children: [{
      value: 'fire',
      label: '消防监控',
    }, {
      value: 'security',
      label: '防盗监控',
    }, {
      value: 'help',
      label: '求助报警',
    }, {
      value: 'electronic',
      label: '电子巡更',
    }, {
      value: 'environmental',
      label: '环境监控',
    }],
  },
  {
    value: 'system',
    label: '系统集成',
    icon: require('../assets/icon-system.png')
  }
]
