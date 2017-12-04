export function jiegou () { // 给结构的表单和表头使用
  let jg = {
    Id: '序号',
    Ziduanbianma: '字段编码',
    Ziduanmingcheng: '字段名称',
    Ziduanleixing: '字段类型',
    Ziduanchangdu: '字段长度'
  }
  return jg
}
export function juesejiegou () {
  let jsjg = [
    {
      Id: 1,
      Ziduanbianma: 'Bianma',
      Ziduanmingcheng: '角色编码',
      Ziduanleixing: 'string',
      Ziduanchangdu: '50'
    },
    {
      Id: 2,
      Ziduanbianma: 'Mingcheng',
      Ziduanmingcheng: '角色名称',
      Ziduanleixing: 'string',
      Ziduanchangdu: '50'
    },
    {
      Id: 3,
      Ziduanbianma: 'Miaoshu',
      Ziduanmingcheng: '角色描述',
      Ziduanleixing: 'string',
      Ziduanchangdu: '250'
    }
  ]
  return jsjg
}
export function shujutou () { // 给数据的表头使用
  let sj = {
    Id: '序号',
    Zhutibianma: '主体编码',
    Ziduanbianma: '字段编码',
    Zhi: '值'
  }
  return sj
}
export function jueseshuju () { // 给数据的表单使用
  let jssj = [{
    Id: 1,
    Zhutibianma: 'GUANLIYUAN',
    Ziduanbianma: 'Bianma',
    Zhi: 'GUANLIYUAN'
  }, {
    Id: 2,
    Zhutibianma: 'GUANLIYUAN',
    Ziduanbianma: 'Mingcheng',
    Zhi: '管理员'
  }, {
    Id: 3,
    Zhutibianma: 'GUANLIYUAN',
    Ziduanbianma: 'Miaoshu',
    Zhi: '后台权限管理员'
  }, {
    Id: 4,
    Zhutibianma: 'YUANGONG',
    Ziduanbianma: 'Bianma',
    Zhi: 'YUANGONG'
  }, {
    Id: 5,
    Zhutibianma: 'YUANGONG',
    Ziduanbianma: 'Mingcheng',
    Zhi: '员工'
  }, {
    Id: 6,
    Zhutibianma: 'YUANGONG',
    Ziduanbianma: 'Miaoshu',
    Zhi: '公司员工角色'
  }, {
    Id: 7,
    Zhutibianma: 'KEHU',
    Ziduanbianma: 'Bianma',
    Zhi: 'KEHU'
  }, {
    Id: 8,
    Zhutibianma: 'KEHU',
    Ziduanbianma: 'Mingcheng',
    Zhi: '客户'
  }, {
    Id: 9,
    Zhutibianma: 'KEHU',
    Ziduanbianma: 'Miaoshu',
    Zhi: '客户角色'
  }]
  return jssj
}

export function ziduanleixing () {
  let leixing = ['字符型', '整数型', '小数型', '日期型']
  return leixing
}
