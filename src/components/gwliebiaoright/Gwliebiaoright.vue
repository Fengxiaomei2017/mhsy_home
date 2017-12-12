<template>
<div class="wrapper">
    <div class='inboxR'>
        <div class='righttitle'><i></i>{{xinweninfo.righttitle}}</div>
        <hr />
        <div class='imgbox'>
            <img class='img' v-show='xinweninfo.imgaddr'
                 :src='xinweninfo.imgaddr'
                 alt='图片'>
        </div>
        <div class='infoR'
             v-for='item3 in xinweninfo.gsjies'>
            <p>{{item3}}</p>
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
        flex: 0 0 76%;
    }
    .inboxR {
        min-height: 500px;
        margin: 30px 10px;
        border: 1px solid #DBDBDB;
        box-shadow: 5px 5px 20px 3px #eee;
        -moz-border-radius: 1%;
        -webkit-border-radius: 1%;
        border-radius: 1%;
        background-color: #fff;
    }
    .righttitle {
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        font-size: 18px;
        font-weight: bold;
    }
    .righttitle i{
        display: inline-block;
        width: 5px;
        height: 25px;
        margin-right: 8px;
        vertical-align: middle;
        background-color: #2097D9;
    }
    .imgbox {
        text-align: center;
        margin: 20px 0;
    }
    .img {
        width: 98%;
    }

    .infoR p {
        margin: 10px 20px;
        line-height: 30px;
        font-size: 16px;
        text-indent: 2em;
        color: #000;
    }
    hr {
        width: 95%;
        margin: 0 auto;
        border: 1px solid #ccc;
    }
</style>
