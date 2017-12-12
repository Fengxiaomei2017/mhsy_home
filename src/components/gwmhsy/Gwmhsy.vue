<template>
<div class='mhsy'>
  <div class='mhsy_wrapper'>
       <img class='bgimg'
            src='./jiyinlian.png'>
    <div class='favicon_box'>
      <h1>AMCHI SUNTE</h1>
      <h2>迪恩摩因，美华基因动力科学</h2>
      <a class='btn' href='javascript: '>了解我们</a>
    </div>
  </div>
  <div class='canpin_wrapper'>
    <!-- <div class='mask'> -->
        <!-- <img class='bgimg'
            src='./chanpin.png'> -->
      <div class='favicon_box'>
        <h1>迪恩魔因</h1>
        <h2>再多帮助一个人，生命智能化， 幸福您我他</h2>
        <a class='btn' href='javascript: '>了解产品</a>
      </div>
    <!-- </div> -->
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      shuju: [
        {
          'imgaddr': 'static/img/mhsybg.jpg',
          // 'icon': 'static/img/favicon.png',
          'icon': '',
          'title': 'AMCHI SUNTE',
          'description': '迪恩摩因，美华基因动力科学'
        },
        {
          'imgaddr': 'static/img/mhsybg.jpg',
          'title': 'AMCHI SUNTE',
          'description': '迪恩摩因，美华基因动力科学'
        }
      ]
    }
  }
}
</script>
<style scoped>
.mhsy_wrapper {
  position: relative;
  height: 100vh;
  /*text-align: center;*/
  color: #fff;
  background: url('bg3.jpg') repeat-x;
}
.canpin_wrapper {
  position: relative;
  width: 100%;
  height: 80vh;
  margin-top: 15px;
  color: #000;
  /*background: url('bg2.jpg') repeat-y;
  background-size: 100% 100%;*/
  background-color: #ECECED;
  border: 1px solid #E3E3E5;
  border-left: 0;
  border-right: 0;
}
.mhsy .bgimg {
  position: absolute;
}
.mhsy .mhsy_wrapper .bgimg {
  top: 15%;
  right: 15%;
  z-index: 2;
  width: 30%;
  height: 90vh;
}
.mhsy .canpin_wrapper .bgimg {
  top: 50%;
  right: 10%;
  transform: translate(0, -50%);
  z-index: 2;
  width: 40%;
}
/*.mhsy_wrapper .mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 98vh;
  color: #000921;*/
  /*background-color: rgba(0, 9, 33, 0.4);*/
  /*background-color: rgba(30, 30, 30, 0.3);*/
/*}*/
.canpin_wrapper .mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 90vh;
  background-color: rgba(26, 44, 84, 0.5);
}
.mhsy .favicon_box {
  position: absolute;
  top: 40%;
  left: 0;
  z-index: 3;
  width: 90%;
  margin-left: 5%;
}
.canpin_wrapper .favicon_box {
  top: 30%;
}
.favicon_box h1,.favicon_box h2 {
  font-weight: normal;
}
.favicon_box h1 {
  font-family: Oswald;
  font-size: 3.2em;
}
.favicon_box h2,.daohang_wrapper a {
  font-family: Droid Sans;
}
.favicon_box h2 {
  margin-top: 20px;
  font-size: 1.3em;
}
.mhsy .btn {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  margin-top: 40px;
  text-align: center;
  border-radius: 4px;
}
.mhsy_wrapper .btn {
  width: 8vw;
  max-width: 150px;
  color: #fff;
  border: 1px solid #fff;
}
.mhsy_wrapper .btn:hover {
  color: #000;
  background-color: #fff;
}
.canpin_wrapper .btn {
  /*background-color: #00C1DE;*/
  width: 15vw;
  max-width: 220px;
  border: 1px solid #00C1DE;
  color: #00C1DE;
}
.canpin_wrapper .btn:hover {
  color: #fff;
  background-color: #00C1DE;
}
.daohang_wrapper {
  height: 120px;
  line-height: 120px;
  margin-top: 2vh;
}
.daohang_wrapper a {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  margin: 0 12px;
  padding: 0 5px;
  font-size: 1.2em;
  color: #8A8E9B;
  /*color: #2D2A92;*/
  /*border-bottom: 2px solid #C11581;*/
  border-radius: 5px;
  text-shadow: 2px 2px 5px #C1BEC1;
}
.daohang_wrapper a:hover {
  color: #C11581;
  border: 2px solid #CB070F;
  border-left: 0;
  border-right: 0;
}
</style>
