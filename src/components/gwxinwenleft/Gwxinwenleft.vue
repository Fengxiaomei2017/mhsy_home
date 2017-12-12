<template>
<div class='wrapper'>
    <div id='qiehuan'><a @click='qiehuan()' href="javascript: " title='点击切换新闻'>点击切换</a></div>
    <div class='inboxL'>
        <div class='titleL'>{{initxinwenlb}} <a @click='sentquanbuxinxi(num)' title='点击查看全部'>[全部]</a></div>
        <hr />
        <div class='infoL' v-for='item in initxinwennr'>
            <a @click='chuanxinwen(item)' href='javascript: '>{{item.Biaoti}}</a>
        </div>
    </div>
</div>
</template>
<script>
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
        initxinwenlb: [],
        initxinwennr: [],
        num: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.getxinweninfo()
        this.initxinwen()
      })
    },
    methods: {
      chuanxinwen (item) {
        this.$emit('jiantingxinwen', item)
      },
      // 获取全部的新闻内容
      getxinweninfo () {
        for (let i = 0; i < this.xinwens.length; i++) {
          let leibie = xinwenleibie(this.xinwens[i])
          let neirong = xinwenxinxi(this.xinwens[i])
          this.xinwenlb.push(leibie)
          this.xinwennr.push(neirong)
        }
      },
      sentquanbuxinxi (num) {
        this.$router.push({path: '/gwxwquanbu', query: {num: num}})
      },
      // 新闻类别和内容的初始值
      initxinwen () {
        this.initxinwenlb = this.xinwenlb[this.num]
        this.initxinwennr = this.xinwennr[this.num]
      },
      // 切换事件
      qiehuan () {
        this.num += 1
        this.initxinwenlb = this.xinwenlb[this.num]
        this.initxinwennr = this.xinwennr[this.num]
        if (this.num >= 4) {
          this.num = -1
        }
      }
    }
  }
</script>
<style scoped>
    .wrapper{
        position: relative;
        width: 300px;
        font-family: '楷体';
    }
    #qiehuan{
        position: absolute;
        top: 48px;
        right: 8%;
    }
    #qiehuan a{
        display: inline-block;
        height: 20px;
        text-align: right;
        color: #fff;
    }
    #qiehuan a:hover{
        color: #CCC;
    }
    .inboxL {
        height: 200px;
        overflow-y: hidden;
        margin: 30px 10px;
        padding: 10px 0;
        border: 1px solid #DBDBDB;
        box-shadow: 5px 5px 20px 3px #eee;
        border-radius: 8%;
    }
    .titleL {
        height: 50px;
        line-height: 55px;
        margin-top: -15px;
        padding-left: 20px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 8px 8px 0 0;
        color: #fff;
        background-color: #2097D9;
    }
    .titleL a{
      line-height: 55px;
      font-size: 14px;
      color: #fff;
    }
    .titleL a:hover{
      color: #ccc;
    }
    .infoL {
        height: 30px;
        line-height: 30px;
        padding: 0 18px;
    }
    .infoL a{
        width: 260px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        color: #606060;
        text-decoration: underline;
    }
    .infoL a:hover{
        /*text-decoration: underline;*/
        font-size: 17px;
        color: #E25162;
    }
    .hidd{
      display: none;
    }
</style>
