<template>
    <div class='wrapper'>
        <h1>
            <i class='icon-office'></i>
            &nbsp;&nbsp;企 / 业 / 模 / 块
        </h1>
        <div class='img_wrapper'>
          <div  class='img_inbox'
                v-for='item in imgdata'
                :key='item.imgaddr'>
            <a  class='acla'
                href='javascript:'>
                <img class='imgcla'
                     :src='item.imgaddr'
                     alt='图片'>
                     <div class='mengban'></div>
                     <p class='imgtext'>
                       {{item.text}}
                     </p>
            </a>
          </div>
        </div>
    </div>
</template>
<script>
  // import {xinwenxinxi} from '@/common/js/xinwen.js'
  // import {dhlianjieneirong} from '@/common/js/ziduan.js'
  export default{
    data () {
      return {
        // dhlianjielb: [
        //   'Meihuashangyi',
        //   'Chanpinjiazu',
        //   'Yanfazhongxin',
        //   'Xiaoshouzhongxin',
        //   'Zhaoshanghezuo',
        //   'Shouhoufuwu'
        // ],
        // yijidaohang: [],
        // lianjieneirong: []
        imgdata: [
          {
            'imgaddr': 'static/img/mhsybg.jpg',
            'text': `美丽中华，尚德智医\n万物之网，物联天下`
          },
          {
            'imgaddr': 'static/img/gongxiang.jpg',
            'text': `共享世界，医疗资源人人共享`
          },
          {
            'imgaddr': 'static/img/hezuo.jpg',
            'text': '合作共赢，等着您\n欢迎您的加入，加盟代理'
          },
          {
            'imgaddr': 'static/img/zhixunfuwu1.jpg',
            'text': `我想`
          }
        ]
      }
    }
    // created () {
    //   setTimeout(() => {
    //     this.getlianjienr()
    //   }, 20)
    // },
    // methods: {
    //   getlianjienr () {
    //     for (let i = 0; i < this.dhlianjielb.length; i++) {
    //       this.yijidaohang.push(dhlianjieneirong(this.dhlianjielb[i]))
    //       this.lianjieneirong.push(xinwenxinxi(this.dhlianjielb[i]))
    //     }
    //   },
    //   sentlianjienr (index, num) {
    //     let imglianjienr = this.lianjieneirong[index][num]
    //     this.$router.push({path: `/Gwdaohangmoban/${imglianjienr.Bianma}`, query: {index: index, num: num}})
    //   }
    // }
  }
</script>
<style scoped>
    .wrapper {
      width: 98%;
      height: auto;
      margin: 20px auto;
    }

    h1 {
      display: block;
      height: 60px;
      line-height: 60px;
      font-size: 1.3em;
      font-weight: bold;
      text-align: center;
      color: #4D555D;
    }
    .icon-office {
      color: #E25162;
    }

    .img_wrapper {
      margin: 0 auto;
    }
    .wrapper .img_inbox {
      display: inline-block;
      position: relative;
      width: 25%;
      height: 50vh;
      margin-bottom: 1%;
      overflow: hidden;
    }
    .img_wrapper .img_inbox .acla {
      display: block;
      width: 100%;
      height: 100%;
      margin: 20% 0 0 8%;
    }
    .wrapper .img_inbox:first-child .acla {
      width: 100%;
      height: 100%;
      margin: 0;
    }
    .wrapper .img_inbox:nth-child(2) {
      background: #fff;
    }
    .wrapper .img_inbox:nth-child(4) {
      background: url(zhixunfuwu2.jpg) repeat-x;
    }
    .wrapper .img_inbox:nth-child(2n) {
      margin-right: 0;
    }
    .wrapper .img_inbox .imgcla {
      width: 106%; /*聚焦时图片左移动时右边就不会出现空缺，有百分之6的宽度*/
      height: 100%;
    }
    .wrapper .img_inbox:nth-child(3) .imgcla {
      width: 90%;
    }
    .wrapper .img_wrapper .mengban {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0;
        background-color: #000;
        /*position: absolute;
        -webkit-transition: opacity 1s ease-in-out;
        -moz-transition: opacity 1s ease-in-out;
        -o-transition: opacity 1s ease-in-out;
        transition: opacity 1s ease-in-out;*/
    }
    .wrapper .img_wrapper .mengban:hover {
        opacity: 0.4;
        filter: alpha(opacity=0.4);
    }

    @-webkit-keyframes myhover {
        0% {
            margin-left: 0;
        }
        20% {
            margin-left: -10;
        }
        50% {
            margin-left: -15px;
        }
        100% {
            margin-left: -20px;
        }
    }
    .wrapper .img_inbox:hover img {
        animation: myhover .6s;
        -webkit-animation: myhover .6s;
        animation-fill-mode: forwards;
    }
    @-webkit-keyframes textup {
        0% {
            top: 0;
        }
        25% {
            top: 3%;
        }
        50% {
            top: 9%;
        }
        100% {
          top:  12%;
        }
    }
    .wrapper .img_inbox .imgtext {
        position: absolute;
        top: 12%;
        left: 50%;
        z-index: 3;
        transform: translate(-50%, 0);
        width: 90%;
        line-height: 20px;
        font-size: 1.2em;
        color: #333;
        text-align: center;
        background-color: none;
    }
    .wrapper .img_inbox:hover .imgtext {
        top: 70%;
        animation: textup .8s;
        -webkit-animation: textup .8s;
        animation-fill-mode: forwards;
    }
/*    .imgtext .bigtext {
        font-size: 2.5em;
    }

    .imgtext .smalltext {
        display: block;
        margin: 12px 0;
        font-size: 15px;
    }*/
</style>
