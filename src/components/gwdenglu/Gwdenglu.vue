<template>
  <div class="wrapper">
    <input onfocus='if(value=="请输入用户名"){value=""}' onblur='if(value==""){value="输入用户名"}' class='yonghuming' type='text' value='请输入用户名'>
    <input onfocus='if(value=="请输入密码"){value=""}' onblur='if(value==""){value="请输入密码"}' class='mima' type='text' value='请输入密码'>
    <button>登录</button>
  </div>
</template>
<script>
export default{}
</script>
<style scoped>
  .wrapper{
    width: 300px;
    height: 250px;
    padding-top: 20px;
    border: 2px solid #C7C7C7;
/*    box-shadow: 10px 10px 5px 5px #eee;*/
    background-color: #fff;
  }
  .yonghuming,.mima,button{
    display: block;
    width: 80%;
    height: 38px;
    line-height: 38px;
    margin: 20px auto;
    font-size: 15px;
  }
  button{
    background-color: #2097D9;
    border: 1px solid #2097D9;
    color: #fff;
  }
</style>
