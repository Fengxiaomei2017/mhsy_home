<template>
        <div class='daohang'>
            <div class='fudaohang'>
                <a href='javascript: '
                  class='icon_wrappar'>
                    <router-link to='/shouye'
                                 href='javascript:' title='点击回到首页'>
                        <img width='35'
                             height='35'
                             class='icon'
                             src='./logo1.png'
                             alt='icon'>
                             美华基因动力科学
                    </router-link>
                </a>
                <ul class='rightfudh'>
                    <li class='yijidh'>
                        <router-link to='/denglu'>登录</router-link>
                    </li>
                    <li class='yijidh'>
                        <a href='javascript:'>选择语言</a>
                    </li>
                    <li style='display:none;' class='yijidh'>
                        <router-link to='/dtbuju/ziyuan/kongbai'>后台管理</router-link>
                    </li>
                </ul>
            </div>
            <div class='daohang_text'>
                <ul class='dh leftdh'>
                    <li class='yijidh yijidhjs' :key='item.Bianma' v-for='(item,index) in yijidaohang'>
                        <a href='javascript:'>{{item}}</a>
                        <ul class='erjidh donghua'>
                            <li>
                                <router-link to='/qiyejies' :key='item.Bianma' v-for='value in lianjieneirong[index]'
                                        v-show='value.Biaoti=="企业介绍"'
                                >
                                {{value.Biaoti}}
                                </router-link>
                            </li>
                            <li v-for='(value,num) in lianjieneirong[index]'
                                v-if='value.Biaoti!="企业介绍"'
                                 @click='sentlianjienr(index,num)'>
                                <a @click='dhneirongqiehuan(value)'>
                                    <img v-if='value.img'
                                         width='200px'
                                         height='200px'
                                         :src='value.img'
                                         alt='图片'>
                                    {{value.Biaoti}}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class='yijidh yijidhjs'><router-link to='/gwxinwen'>企业新闻</router-link></li>
                </ul>
                <div class='dh_lianxiwomen'><router-link to='/lianxiwomen'>联系我们</router-link></div>
            </div>
        </div>
</template>
<script>
  import Gwdenglu from '@/components/gwdenglu/Gwdenglu.vue'
  import {xinwenxinxi} from '@/common/js/xinwen.js'
  import {dhlianjieneirong} from '@/common/js/ziduan.js'
  export default{
    data () {
      return {
        dhlianjielb: [
          'Meihuashangyi',
          'Chanpinjiazu',
          'Yanfazhongxin',
          'Xiaoshouzhongxin',
          'Zhaoshanghezuo',
          'Shouhoufuwu'
        ],
        yijidaohang: [],
        lianjieneirong: [],
        lianje: ''
      }
    },
    created () {
      setTimeout(() => {
        this.getlianjienr()
      }, 20)
    },
    methods: {
      // 获得一级导航的内容和二级导航的内容
      getlianjienr () {
        for (let i = 0; i < this.dhlianjielb.length; i++) {
          this.yijidaohang.push(dhlianjieneirong(this.dhlianjielb[i]))
          this.lianjieneirong.push(xinwenxinxi(this.dhlianjielb[i]))
        }
      },
      // 添加路由传参事件，把当前的一级导航的索引值和二级导航的索引值传递到每个子导航页面
      sentlianjienr (index, num) {
        let sentneirong = this.lianjieneirong[index][num]
        this.$router.push({path: `/Gwdaohangmoban/${sentneirong.Bianma}`, query: {index: index, num: num}})
      },
      // 给父组件传递值（即给子导航页面传递正确的页面信息），为了在二级导航页面也能正确点击到其它二级导航页面
      dhneirongqiehuan (value) {
        this.$emit('jiantingqiehuan', value)
      }
    },
    components: {
      Gwdenglu
    }
  }
</script>
<style scoped>
    .daohang {
      width: 100%;
      height: 100px;
      border-bottom: 1px solid rgba(150, 150, 155, 0.8);
    }
    .daohang:hover {
      background-color: #64686B;
    }
    .daohang .fudaohang {
      height: 40px;
      padding: 0 1%;
    }
    .daohang .fudaohang .icon_wrappar {
      width: 200px;
      height: 40px;
      line-height: 40px;
    }
    .daohang .fudaohang .icon {
      vertical-align: middle;
    }
    .daohang .fudaohang .rightfudh {
      float: right;
      line-height: 40px;
    }
    .daohang .daohang_text {
      position: relative;
      width: 98%;
      height: 60px;
      padding: 0 1%;
      border-top: 1px solid rgba(150, 150, 155, 0.8);
      border-left: 0;
      border-right: 0;
    }
    .daohang .daohang_text .dh {
      line-height: 60px;
    }
    .daohang .daohang_text .dh_lianxiwomen {
      position: absolute;
      top: 0;
      right: 0;
    }
    .daohang .dh_lianxiwomen a {
      display: block;
      width: 150px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background-color: #00C1DE;
    }
    .leftdh {
      position: relative;
    }

    .rightfudh {
      margin-left: 2%;
      text-align: right;
    }

    .daohang .yijidh {
      display: inline-block;
      margin-left: -4px;
    }
    .daohang .icon_wrappar a,.daohang .yijidh a,.daohang .dh_lianxiwomen a{
      color: #fff;
    }
    .leftdh .yijidh {
      position: relative;
    }
    .leftdh .erjidh {
      position: absolute;
      display: none;
      width: auto;
      left: 5px;
      z-index: 99;
      border: 1px solid #eee;
      background-color: #fff;
    }
    .leftdh .erjidh a {
      color: #292828;
    }
    .leftdh .donghua {
      animation: myfirst .4s;
      -webkit-animation: myfirst .4s;
      animation-fill-mode: forwards;
    }

    @-webkit-keyframes myfirst {
        0% {
            opacity: 0;
            left: -5px;
            top: 40%;
        }
        25% {
            opacity: 0.3;
            left: -5px;
            top: 50%;
        }
        50% {
            opacity: 0.5;
            left: -5px;
            top: 65%;
        }
        75% {
            opacity: 0.8;
            left: -5px;
            top: 75%;
        }
        100% {
            opacity: 1;
            left: -5px;
            top: 100%;
        }
    }
    .yijidh a {
      line-height: 30px;
      display: block;
      padding: 0 15px;
      text-decoration: none;
      text-align: center;
      font-size: 15px;
      border-radius: 5%;
    }

    .dh .yijidh img {
      vertical-align: middle;
    }


    .leftdh .erjidh a {
      min-width: 120px;
      font-weight: normal;
    }
    .yijidh .chanpin img {
      margin-left: -15px;
    }

    .yijidh a:hover {
        /*color: #00BFDB;*/
      color: #00c1D1;
    }
    .yijidh:nth-child(3) .erjidh a:hover{
        /*color: #000;*/
      background-color: #fff;
    }

    .yijidh:hover .donghua {
      display: block;
      margin-top: 0;
    }

    .yijidh:hover .chanpin {
      display: block;
    }

    .denglubox {
      position: absolute;
      display: none;
      top: 80px;
      right: 1%;
      z-index: 99;
    }
</style>
