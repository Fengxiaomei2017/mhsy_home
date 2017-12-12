<template>
<div>
  <div class='wrapper'>
    <Daohang class='daohang'></Daohang>
    <div class='gwxinwen'>
      <Gwxinwenleft v-on:jiantingxinwen='getxwshuju'></Gwxinwenleft>
      <div class='inboxR'>
        <div class='title'>{{xinwenxinxi.Biaoti}}</div>
        <div class='zuozhe'>{{xinwenxinxi.Zuozhe}}</div>
        <hr />
        <div class='zhaiyao'>{{xinwenxinxi.Zhaiyao}}</div>
        <div class='info'>
          <p>{{xinwenxinxi.Neirong}}</p>
        </div>
        <div class='cankao'>{{xinwenxinxi.Cankao}}</div>
      </div>
    </div>
    <Footerview class='footerview'></Footerview>
  </div>
</div>
</template>
<script>
import Daohang from '@/components/gwshouyedaohang/Gwshouyedaohang.vue'
import Gwxinwenleft from '@/components/gwxinwenleft/Gwxinwenleft.vue'
import Footerview from '@/components/gwfooter/Gwfooter.vue'
import {xinwenxinxi} from '@/common/js/xinwen.js'
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
      xinwenxinxi: {}
    }
  },
  created () {
    setTimeout(() => {
      this.getxinwen()
    }, 20)
  },
  methods: {
    // 右方新闻显示的初始内容（为该类别的第一条新闻）
    getxinwen () {
      let neirong = xinwenxinxi(this.xinwens[0])
      this.xinwenxinxi = neirong[0]
    },
    // 监听事件，通过左方传过来的对应的当前数据，渲染到右方
    getxwshuju (item) {
      this.xinwenxinxi = item
    }
  },
  components: {
    Daohang,
    Gwxinwenleft,
    Footerview
  }
}
</script>
<style scoped>
.wrapper{
  width: 98%;
  margin: 0 auto;
}
.daohang {
  background-color: #64686B;
}
.gwxinwen{
  display: flex;
  width: 98%;
  text-align: left;
  font-family: 'FangSong';
  color: #000;
}
.inboxR {
  flex: 0 0 76%;
  min-height: 500px;
  margin: 30px 10px;
  padding-bottom: 10px;
  border: 1px solid #DBDBDB;
  box-shadow: 5px 5px 20px 3px #eee;
  -moz-border-radius: 1%;
  -webkit-border-radius: 1%;
  border-radius: 1%;
  background-color: #fff;
}
.title,.zuozhe{
  margin: 10px 2.5%;
}
.title {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
}
.zuozhe{
  font-size: 13px;
}
.zhaiyao{
  margin: 30px 0 20px 2.5%;
  font-size: 15px;
}
.info p {
  margin: 10px 20px;
  line-height: 30px;
  font-size: 13px;
  font-family: "宋体";
  text-indent: 2em;
  color: #000;
}
.cankao{
  margin-left: 5%;
}
hr {
  width: 95%;
  margin: 10px auto;
  border: 1px solid #C0C0C0;
}
</style>
