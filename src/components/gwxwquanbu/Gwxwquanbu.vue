<template>
<div class='wrapper'>
    <Daohang></Daohang>
    <div class="outbox">
        <div class='leftbox'>
            <div class='title'><i></i>{{leibie}}</div>
            <hr>
            <div class='info' v-for='(item,index) in quanbubiaoti'>
                <a @click='showneirong(index)' hreft='javascript: '>{{index+1}}、{{item.Biaoti}}</a>
            </div>
        </div>
        <div class="rightbox">
            <div class='title'>{{xinwenbt}}<i></i></div>
            <hr>
            <div class='zuozhe'>{{currentxinwen.zuozhe}}</div>
            <div class='zhaiyao'>{{currentxinwen.zhaiyao}}</div>
            <div class='neirong'><p>{{neirong}}</p></div>
            <div class='cankao'>{{currentxinwen.cankao}}</div>
        </div>
    </div>
    <Footerview class='footer'></Footerview>
</div>
</template>
<script>
  import Daohang from '@/components/gwshouyedaohang/Gwshouyedaohang.vue'
  import Footerview from '@/components/gwfooter/Gwfooter.vue'
  import {xinwenxinxi} from '@/common/js/xinwen.js'
  import {xinwenleibie} from '@/common/js/ziduan.js'
  export default{
    data () {
      return {
        xinwens: [
          'CHANPIN_LIST',
          'DNAMY',
          'LIANJIE',
          'SHOUYE_XINWEN',
          'SHOUYE_XINXI'
        ],
        xinwenlb: [],
        xinwennr: [],
        xinwenbt: '专题介绍',
        neirong: '根据基因编辑的动力学原理，我们研究并开发了动态修复智能系统，在世界上首次运用单纯的能量疗法治疗糖尿病及各种威胁人类健康的慢病。动态修复智能系统将会引领人类进入疾病修复与预防的生命微观的物力子科学时代，这个产品的未来，将会走进每一个家庭，医疗资源的共享时代就会到来！。',
        currentxinwen: [],
        leibie: '',
        quanbubiaoti: []
      }
    },
    created () {
      setTimeout(() => {
        this.getxinweninfo()
        this.getquanbushuju()
      }, 20)
    },
    methods: {
      // 获取总的新闻类别和总的新闻数据
      getxinweninfo () {
        for (let i = 0; i < this.xinwens.length; i++) {
          let lb = xinwenleibie(this.xinwens[i])
          let xinweninfo = xinwenxinxi(this.xinwens[i])
          this.xinwenlb.push(lb)
          this.xinwennr.push(xinweninfo)
        }
      },
      // 通过路由传过来的索引值获取当前正确的新闻类别和新闻数据
      getquanbushuju () {
        let dex = this.$route.query.num
        this.leibie = this.xinwenlb[dex]
        this.quanbubiaoti = this.xinwennr[dex]
      },
      // 点击左方对应的新闻标题，右方展示相应的内容
      showneirong (index) {
        this.currentxinwen = this.quanbubiaoti[index]
        this.xinwenbt = this.currentxinwen.Biaoti
        this.neirong = this.currentxinwen.Neirong
      }
    },
    components: {
      Daohang,
      Footerview
    }
  }
</script>
<style scoped>
    .wrapper{
        background-color: #eee;
    }
    .outbox{
        display: flex;
        width: 90%;
        margin:20px auto 20px auto;
        text-align: left;
        background-color: #FCFDF8;
    }
    .leftbox,.rightbox{
        flex: 1;
        min-height: 600px;
        border: 1px solid #eee;
        border-radius: 3px;
    }
    .leftbox{
        flex: 1;
        height: auto;
        border-right: 1px solid #DBDBDB;
        box-shadow: 5px 5px 30px 5px #eee;
    }
    .rightbox{
        border-left: 0;
        box-shadow: -5px -5px 30px 5px #eee;
        font-size: 13px;
    }
    .title {
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 8px 8px 0 0;
    }
    .rightbox .title{
        padding-right: 20px;
        text-align: right;
    }
    .title i{
        display: inline-block;
        width: 5px;
        height: 25px;
        vertical-align: middle;
    }
    .leftbox .title i{
        margin-right: 8px;
        background-color: #2097D9;
    }
    .rightbox .title i{
        margin-left: 8px;
        background-color: #E25162;
    }
    .zuozhe{
        margin: 0 5%;
        font-weight: bold;
    }
    .zhaiyao,.neirong p,a{
        margin: 0 20px;
        line-height: 30px;
        color: #000;
    }
    .zhaiyao{
        padding: 15px 0;
        text-indent: 2em;
    }
    .neirong p {
        text-indent: 2em;
    }
    .cankao{
        margin: 10px 5% 20px 5%;
    }
    a{
        display: inline-block;
        width: 400px;
        height: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 15px;
    }
    a:hover{
        font-size: 18px;
        font-weight: bold;
        color: #E25162;
    }
    hr{
        width: 95%;
        margin: 0 auto 10px auto;
        border: 1px solid #C0C0C0;
    }
    .footer{
        width: 100%;
        background-color: #272727;
    }
</style>
