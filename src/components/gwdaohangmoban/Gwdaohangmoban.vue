<template>
<div class="wrapper">
  <Daohang class='daohang' v-on:jiantingqiehuan='qiehuanneirong'></Daohang>
  <div class='qiyejies'>
    <div class='title'><i></i>{{biaoti}}</div>
    <hr/>
    <div class='container'>
      <div class='Imgbox'>
        <img :src='imgaddr' class='Img'></div>
      <div id='textjs' class='text'></div>
    </div>
  </div>
  <Footerview class='footerview'></Footerview>
</div>
</template>
<script>
  import Daohang from '@/components/gwshouyedaohang/Gwshouyedaohang.vue'
  import Footerview from '@/components/gwfooter/Gwfooter.vue'
  import {xinwenxinxi} from '@/common/js/xinwen.js'
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
        lianjieneirong: [],
        shuju: [],
        biaoti: '',
        imgaddr: '',
        neirong: ''
      }
    },
    created () {
      setTimeout(() => {
        this.getlianjienr()
        this.getvalue()
      }, 20)
    },
    methods: {
      getlianjienr () {
        for (let i = 0; i < this.dhlianjielb.length; i++) {
          this.lianjieneirong.push(xinwenxinxi(this.dhlianjielb[i]))
        }
      },
      // 在首页点击导航时二级导航页面渲染出的值
      getvalue () {
        let dex = this.$route.query.index
        let number = this.$route.query.num
        this.shuju = this.lianjieneirong[dex][number]
        this.biaoti = this.shuju.Biaoti
        this.imgaddr = this.shuju.imgaddr
        this.neirong = this.shuju.Neirong
      },
      // 在二级导航页面中点击导航，页面渲染出的值（在同一页面，不同数据）
      qiehuanneirong (value) {
        this.shuju = value
        this.biaoti = this.shuju.Biaoti
        this.imgaddr = this.shuju.imgaddr
        this.neirong = this.shuju.Neirong
      }
    },
    // 监听，当neirong改变后渲染一次
    watch: {
      neirong () {
        let textjs = document.getElementById('textjs')
        textjs.innerHTML = this.neirong
      }
    },
    components: {
      Daohang,
      Footerview
    }
  }
</script>
<style scoped>
.daohang{
  background-color: #373D41;
}
.qiyejies{
  width: 80%;
  margin: 110px 0 0 10%;
  text-align: left;
  font-size: 1.5em;
  color: #000;
  font-weight: bold;
  font-size: 15px;
}
.qiyejies .title{
  height: 40px;
  margin: 30px 0 10px 0;
  line-height: 40px;
  font-size: 2em;
  font-weight: bold;
}
.qiyejies .container{
  width: 70%;
  font-family: 'FangSong';
}
.container .Img{
  width: 90%;
  height: 250px;
  margin-bottom: 10px;
  box-shadow: 8px 8px 15px #ccc,-8px 0 15px #ccc;
}
.container .text{
  margin: 10px 0 40px 0;
  line-height: 30px;
}
hr{
  margin-bottom: 20px;
  border: 1px solid #eee;
}
i{
  display: inline-block;
  width: 5px;
  height: 40px;
  margin-right: 8px;
  vertical-align: top;
  background-color: #2097D9;
}
</style>
