export function lieming (bianma, houzhui) {
  var shiti = {
    A: 'A',
    Bianhao: '编号',
    Bianma: '编码',
    Biaoji: '标记',
    Biaoti: '标题',
    Bofangshijian: '播放时间',
    Buliangfanying: '不良反应',
    Canhouerxiaoshi: '餐后二小时',
    Cankao: '参考',
    Caozuoren: '操作人',
    Caozuoriqi: '操作日期',
    Chaojipeizhi: '超级配置',
    Chuangjianriqi: '创建日期',
    Chushengriqi: '出生日期',
    Cujinfangan: '促进方案',
    Danwei: '单位',
    Dtziyuan: '资源',
    Duankou: '端口',
    Error01: '系统异常提示',
    Error02: 'json解析错误提示',
    Error03: '字段类型错误提示',
    Error04: '数据不存在提示',
    Error05: 'Id类型错误提示',
    Exingzhongliu: '恶性肿瘤',
    Fubianma: '父编码',
    Fuwufankui: '服务反馈',
    Fuwufankuijiegou: '服务反馈结构',
    Fuwufankuishuju: '服务反馈数据',
    Fuwufankuishujujiegou: '服务反馈数据结构',
    Fuwuganshou: '服务感受',
    Fuyao: '服药',
    Fuyaoliang: '服药量',
    Ganran: '感染',
    Ganranqita: '其他感染病',
    Ganyu: '干预',
    Guilei: '归类',
    Guize: '规则',
    Guojihua: '国际化',
    Huifuyonghu: '回复用户',
    Hunfou: '婚否',
    Id: '主键',
    Ip: 'Ip地址',
    Jiamifangshi: '加密方式',
    Jiancefenxi: '监测分析',
    Jiancefenxijiegou: '监测分析结构',
    Jiancefenxishuju: '监测分析数据',
    Jiancefenxishujujiegou: '监测分析数据结构',
    Jianceshuju: '监测数据',
    Jiankangtouzi: '健康投资',
    Jiankangzhuangkuang: '监控状况',
    Jiazubingshi: '家族病史',
    Jibing: '疾病',
    Jibingjiegou: '疾病结构',
    Jibingshuju: '疾病数据',
    Jibingshujujiegou: '疾病数据结构',
    Jiegou: '结构',
    Jiliang: '剂量',
    Jinzhixiazai: '禁止下载',
    Jsonmojiming: 'Jsonmoji结构体名称',
    Juese: '角色',
    Juesebianma: '角色编码',
    Juesebiao: '角色表',
    Juesejiegou: '角色结构',
    Juesequanxian: '角色权限',
    Jueseshuju: '角色数据',
    Jueseziyuan: '角色资源',
    Jueseziyuanjiegou: '角色资源结构',
    Jueseziyuanshuju: '角色资源数据',
    Jwtmima: 'Jwt密码',
    Jwtyan: 'Jwt盐',
    Kongfu: '空腹',
    Leixing: '类型',
    Linchuangzhenduan: '临床诊断',
    Liuyan: '留言',
    Liuyanjiegou: '留言结构',
    Liuyanshuju: '留言数据',
    Liuyanshujujiegou: '留言数据结构',
    Liuyanyonghu: '留言用户',
    Lujing: '路径',
    Mhsydata: '美华尚医数据后台',
    Miaoshu: '描述',
    Mima: '密码',
    Mingcheng: '名称',
    Minzu: '民族',
    Neirong: '内容',
    Nianling: '年龄',
    Ormdebug: 'Ormdebug开启与否',
    Paixu: '排序',
    Pifubing: '皮肤病',
    Pifubingqita: '其他皮肤病',
    Qidongriqi: '启动日期',
    Qita: '其他',
    Qiyong: '启动',
    Quanxian: '权限',
    Quanxianbianma: '权限编码',
    Qudong: '驱动',
    Shebei: '设备',
    Shebeihao: '设备号',
    Shebeijiegou: '设备结构',
    Shebeishuju: '设备数据',
    Shebeishujujiegou: '设备数据结构',
    Shengao: '身高',
    Shentiganshou: '身体感受',
    Shezhi: '设置',
    Shifoufabu: '是否发布',
    Shifouhejiu: '是否喝酒',
    Shifouxiyan: '是否吸烟',
    Shijian: '时间',
    Shijianbianma: '时间编码',
    Shijianjiegou: '时间结构',
    Shijianshuju: '时间数据',
    Shijianshujujiegou: '时间数据结构',
    Shoujihao: '手机号',
    Shuimianzhuangtai: '睡眠状态',
    Shuju: '数据',
    Tanghuaxuehongdanbai: '糖化血红蛋白',
    Tangniaobing: '糖尿病',
    Tiaoshu: '条数',
    Tishi01: '邮箱格式提示',
    Tishi02: '密码格式提示',
    Tishi03: '保存成功提示',
    Tishi04: '保存失败提示',
    Tishi05: '修改成功提示',
    Tishi06: '修改失败提示',
    Tishi07: '删除成功提示',
    Tishi08: '删除失败提示',
    Tishi09: '验证失败提示',
    Tizhengzhibiao: '体征指标',
    Tizhengzhibiaojiegou: '体征指标结构',
    Tizhengzhibiaoshuju: '体征指标数据',
    Tizhengzhibiaoshujujiegou: '体征指标数据结构',
    Tizhengzhibiaozu: '体征指标组',
    Tizhengzhibiaozujiegou: '体征指标组结构',
    Tizhengzhibiaozushijian: '体征指标组时间',
    Tizhengzhibiaozushijianjiegou: '体征指标组时间结构',
    Tizhengzhibiaozushijianshuju: '体征指标组时间数据',
    Tizhengzhibiaozushijianshujujiegou: '体征指标组时间数据结构',
    Tizhengzhibiaozushuju: '体征指标组数据',
    Tizhengzhibiaozushujujiegou: '体征指标组数据结构',
    Tizhengzhibiaozuzhibiao: '体征指标组指标',
    Tizhengzhibiaozuzhibiaojiegou: '体征指标组指标结构',
    Tizhengzhibiaozuzhibiaoshuju: '体征指标组指标数据',
    Tizhengzhibiaozuzhibiaoshujujiegou: '体征指标组指标数据结构',
    Tizhong: '体重',
    Touxiang: '头像',
    Weiyibianma: '唯一编码',
    Wenhuachengdu: '文化程度',
    Wenzhang: '文章',
    Wenzhangjiegou: '文章结构',
    Wenzhangshuju: '文章数据',
    Wenzhangshujujiegou: '文章数据结构',
    Xiangmu: '项目',
    Xiangmubianma: '项目编码',
    Xiangmushuju: '项目数据',
    Xiangmuzu: '项目组',
    Xiangmuzubianma: '项目组编码',
    Xiangmuzushijian: '项目组时间',
    Xiangmuzuxiangmu: '项目组项目',
    Xiaoguokeping: '效果客评',
    Xingbie: '性别',
    Xinnaoxueguanbing: '心脑血管病',
    Xinnaoxueguanbingqita: '其他心脑血管病',
    Xinxi: '信息',
    Xinxibianma: '信息编码',
    Xinxijuese: '信息角色',
    Xiugairiqi: '修改日期',
    Xuetang: '血糖',
    Xuetangchuli: '血糖处理',
    Yanzheng: '验证',
    Yanzhengleixing: '验证类型',
    Yinpin: '音频',
    Yinpinbianma: '音频编码',
    Yinpinbofang: '音频播放',
    Yinpinbofangjiegou: '音频播放结构',
    Yinpinbofangshuju: '音频播放数据',
    Yinpinbofangshujujiegou: '音频播放数据结构',
    Yinpinjiegou: '音频结构',
    Yinpinshuju: '音频数据',
    Yinpinshujujiegou: '音频数据结构',
    Yinpinxiazai: '音频下载',
    Yinpinxiazaijiegou: '音频下载结构',
    Yinpinxiazaishuju: '音频下载数据',
    Yinpinxiazaishujujiegou: '音频下载数据结构',
    Yinshixiguan: '饮食习惯',
    Yixuebianma: '医学编码',
    Yonghu: '用户',
    Yonghubianma: '用户编码',
    Yonghubiao: '用户表',
    Yonghujibing: '用户疾病',
    Yonghujiegou: '用户结构',
    Yonghujuesebianma: '编号',
    Yonghujuesebiao: '用户角色表',
    Yonghujueseshuju: '用户角色数据',
    Yonghushuju: '用户数据',
    Youxiang: '邮箱',
    Youxiaoxing: '有效性',
    Yu: '本地域',
    Yundongcishu: '运动次数',
    Yundongleixing: '运动类型',
    Yundongshijian: '运动时间',
    Yuyan: '语言',
    Zhanghao: '帐号',
    Zhanghaojiegou: '帐号结构',
    Zhanghaojuese: '帐号角色',
    Zhanghaojuesejiegou: '帐号角色结构',
    Zhanghaojueseshuju: '帐号角色数据',
    Zhanghaojueseshujujiegou: '帐号角色数据结构',
    Zhanghaoshijian: '帐号时间',
    Zhanghaoshijianjiegou: '帐号时间结构',
    Zhanghaoshijianshuju: '帐号时间数据',
    Zhanghaoshijianshujujiegou: '帐号时间数据结构',
    Zhanghaoshuju: '帐号数据',
    Zhanghaoshujujiegou: '帐号数据结构',
    Zhi: '值',
    Zhidingren: '制定人',
    Zhiye: '职业',
    Zhushe: '注射',
    Zhusheliang: '注射量',
    Zhutibianma: '主体编码',
    Zidian: '字典',
    Zidianjiegou: '字典结构',
    Zidianshuju: '字典数据',
    Zidianshujujiegou: '字典数据结构',
    Ziduan: '字段',
    Ziduanbianma: '字段编码',
    Ziduanleixing: '字段类型',
    Ziduanmingcheng: '字段名称',
    Ziyuan: '资源',
    Ziyuanbianma: '资源编码',
    Ziyuanjiegou: '资源结构',
    Ziyuanshuju: '资源数据',
    Ziyuanshujujiegou: '资源数据结构'
  }
  let ret = shiti[bianma]
  if (houzhui !== undefined && houzhui !== '') {
    if (houzhui === 'jiegou') {
      ret = ret + '结构'
    } else if (houzhui === 'shuju') {
      ret = ret + '数据'
    } else if (houzhui === 'guanli') {
      ret = ret + '管理'
    }
  }
  return ret
}
export function lieleixing (bianma) {
  let shiti = {
    A: 'A',
    Mhsydata: 'string',
    Dtziyuan: 'string',
    Fubianma: 'string',
    Chuangjianriqi: 'time',
    Paixu: 'int',
    Bianma: 'string',
    Lujing: 'string',
    Xiugairiqi: 'time',
    Biaoji: 'string',
    Id: 'int',
    Mingcheng: 'string'
  }
  return shiti[bianma]
}
export function mobanziduan (ziduan) {
  let moban = {
    'WEN_ZI': {
      'Biaoti': '标题',
      'Neirong': '内容'
    },
    'TUPIAN_WENZI': {
      'Biaoti': '标题',
      'Tupian': '图片',
      'Neirong': '内容'
    },
    'SHIPIN_WENZI': {
      'Biaoti': '标题',
      'Shipin': '视频',
      'Neirong': '内容'
    }
  }
  return moban[ziduan]
}

export function xinwenleibie (bianma) {
  let lb = {
    'CHANPIN_LIST': '产品新闻',
    'DNAMY': '美华基因',
    'LIANJIE': '关于美华',
    'SHOUYE_XINWEN': '科研新闻',
    'SHOUYE_XINXI': '每日新闻'
  }
  return lb[bianma]
}
export function dhlianjieneirong (bianma) {
  let dhlb = {
    'Meihuashangyi': '美华尚医',
    'Chanpinjiazu': '产品家族',
    'Yanfazhongxin': '研发中心',
    'Xiaoshouzhongxin': '销售中心',
    'Zhaoshanghezuo': '招商合作',
    'Shouhoufuwu': '售后服务'
  }
  return dhlb[bianma]
}

export function zifuleixingzhuanhuan (name) {
  if (name === '字符型') {
    return 'zifuxing'
  } else if (name === '整数型') {
    return 'zhenshuxing'
  } else if (name === '小数型') {
    return 'xiaoshuxing'
  } else {
    return 'riqixing'
  }
}

export default class Biaodanshuju {
  constructor ({xuhao, ziduanbianma, ziduanmingchen, ziduanleixing, ziduanchangdu}) {
    this.xuhao = xuhao
    this.ziduanbianma = ziduanbianma
    this.ziduanmingchen = ziduanmingchen
    this.ziduanleixing = ziduanleixing
    this.ziduanchangdu = ziduanchangdu
  }
}
