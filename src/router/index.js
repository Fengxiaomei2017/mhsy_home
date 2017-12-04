import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/gwshouye/Gwshouye.vue'
import Qiyejies from '@/components/gwqiyejies/Gwqiyejies.vue'
import Gwxinwen from '@/components/gwxinwen/Gwxinwen.vue'
import Gwxwquanbu from '@/components/gwxwquanbu/Gwxwquanbu.vue'
import Gwdaohangmoban from '@/components/gwdaohangmoban/Gwdaohangmoban.vue'
import Gwlianxiwomen from '@/components/gwlianxiwomen/Gwlianxiwomen.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/shouye'
    },
    {
      path: '/shouye',
      component: Shouye
    },
    {
      path: '/qiyejies',
      component: Qiyejies
    },
    {
      path: '/gwxinwen',
      component: Gwxinwen
    },
    {
      path: '/gwxwquanbu',
      component: Gwxwquanbu
    },
    {
      path: '/lianxiwomen',
      component: Gwlianxiwomen
    },
    {
      path: '/Gwdaohangmoban/:Bianma',
      component: Gwdaohangmoban
    }
  ]
})
