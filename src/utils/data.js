// 菜单
export const MENUS = {
  home: {
    label: '首页',
  },
  management: {
    label: '出入管理',
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
  monitor: {
    label: '监控预警',
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
  system: {
    label: '系统集成',
  }
}
