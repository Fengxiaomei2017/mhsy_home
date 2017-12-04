import {lieming} from '@/common/js/ziduan.js'
import {formatOne} from '@/common/js/date.js'
export function biaotou (me, fubianma, mokuai) {
  var columns2dt = []
  // if (mokuai === 'ziyuan') {
  var jstrfu = '{"Bianma": "' + fubianma + '"}'
  me.$http.post('http://10.0.0.126:8888/' + mokuai + '/quanbu', jstrfu).then(response => {
    if (response.data['DT'] === undefined) {
      return
    }
    var dt = response.data['DT'][0]
    for (var key in dt) {
      if (key !== 'Id' && key !== 'Paixu') {
        if (key === 'Bianma') {
          var cobjb = {title: lieming(key), key: key, width: 200, fixed: 'left'}
          columns2dt.push(cobjb)
        } else {
          var cobj = {title: lieming(key), key: key, width: 170}
          columns2dt.push(cobj)
        }
      }
    }
    var caozuo = {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 120,
      render: (h, params) => {
        return h('div', [
          h('Button', {
            props: {
              type: 'text',
              size: 'small'
            }
          }, '查看'),
          h('Button', {
            props: {
              type: 'text',
              size: 'small'
            }
          }, '编辑')
        ])
      }
    }
    columns2dt.push(caozuo)
  }, response => {
    console.log('获取父目录出错！')
  })
  return columns2dt
  // }
}

export function biaoshuju (me, fubianma, mokuai, chaxun) {
  var data4dt = []
  if (mokuai === 'ziyuan') {
    me.$http.post('http://10.0.0.126:8888/' + mokuai + '/quanbu', chaxun).then(response => {
      var allfrom = response.data
      for (var ak in allfrom) {
        var al = allfrom[ak]
        for (var i = 0; i < al.length; i++) {
          al[i].Chuangjianriqi = new Date(al[i].Chuangjianriqi)
          al[i].Chuangjianriqi = formatOne(al[i].Chuangjianriqi, 'yyyy-MM-dd hh:mm:ss')
          al[i].Xiugairiqi = new Date(al[i].Xiugairiqi)
          al[i].Xiugairiqi = formatOne(al[i].Xiugairiqi, 'yyyy-MM-dd hh:mm:ss')
          data4dt.push(al[i])
        }
      }
    }, response => {
      console.log('获取父目录出错！')
    })
  }
  return data4dt
}
