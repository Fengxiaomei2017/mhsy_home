<template>
<div class="wrapper">
    <div class='inboxL'>
        <div class='titleL'>{{xinweninfo.lefttitle}}</div>
        <div class='infoL'
             v-for='(item,index) in xinweninfo.gaikuoxinxi'>
            <p>{{item}}</p>
        </div>
    </div>
</div>
</template>
<script>
  export default{
    props: [
      'xinweninfo'
    ]
  }
</script>
<style scoped>
    .wrapper{
        /*flex: 0 0 22%;*/
        width: 300px;
    }
    .inboxL {
        height: 200px;
        margin: 30px 10px;
        box-shadow: 5px 5px 20px 3px #CCC;
        -moz-border-radius: 8%;
        -webkit-border-radius: 8%;
        border-radius: 8%;
        border: 1px solid #E25162;
    }
    .titleL {
        height: 50px;
        width: 101%;
        margin: -1px 0 0 -1px;
        line-height: 50px;
        padding-left: 20px;
        font-size: 18px;
        font-weight: bold;
        -moz-border-radius: 8px 8px 0 0;
        -webkit-border-radius: 8px 8px 0 0;
        border-radius: 8px 8px 0 0;
        color: #fff;
        background-color: #E25162;
    }
    .infoL {
        font-weight: bold;
        color: #444;
    }
    .infoL p {
        margin: 10px;
        line-height: 30px;
        font-size: 15px;
        line-height: 20px;
        font-family: '楷体';
        font-size: 18px;
    }
</style>
