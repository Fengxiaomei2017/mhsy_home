<template>
  <div class='lianxiwomen'>
    <div class='lianxi_us'>
      <h3>联系我们</h3>
      <small>Contact us</small>
      <div class='hello'>您好：</div>
      <p class='huanyinyu'>感谢您查看我们的官网，如果您想了解更多我司的信息，可以联系我们，或者在右侧留下另的联系方式，我们会尽快联系您。</p>
      <ul class='lianxi_addr'>
        <li><strong>地址：</strong>成都天赋生命科技园A1座5楼美华尚医</li>
        <li><strong>联系电话：</strong>028-888888</li>
        <li><strong>联系微信：</strong>1300000000</li>
        <li><strong>联系QQ：</strong>8888888</li>
      </ul>
      <div class='lianxi_erweima'>
        <span>或扫一扫关注我们的公众号</span>
        <img class='lianxi_weixin'
             src='./wx.jpg'
             style='width: 150px; height: 150px;'/>
      </div>
    </div>
    <ul class='lianxi_you'>
      <li class='lilist'><input class='inputcla' type='text' placeholder='姓名 Name' /></li>
      <li class='lilist'><input class='inputcla' type='number' placeholder='电话 Tel' /></li>
      <li class='lilist'><input class='inputcla' type='text' placeholder='微信 Wechat' /></li>
      <li class='lilist'><textarea class='inputcla' name='' cols='30' rows='10' placeholder='留言'></textarea></li>
      <li class='lilist'><input class='inputcla' type='submit' value='提交'/></li>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .lianxiwomen {
    display: flex;
    width: 80%;
    margin: 60px auto;
  }
  .lianxiwomen .lianxi_us {
    flex: 0 0 60%;
    color: #6B6A6A;
  }
  .lianxiwomen .lianxi_you{
    flex: 0 0 35%;
  }
  .lianxiwomen .lianxi_us {
    line-height: 40px;
  }
  .lianxiwomen .lianxi_us h3,.lianxiwomen .lianxi_us strong,.lianxiwomen .lianxi_us span{
    color: #2D2C2C;
  }
  .lianxiwomen .lianxi_us h3 {
    display: inline-block;
    border-bottom: 2px solid #00C1DE;
  }
  .lianxiwomen .lianxi_us .huanyinyu {
    width: 80%;
    line-height: 20px;
  }
  .lianxiwomen .lianxi_erweima .lianxi_weixin {
    display: block;
  }
  .lianxiwomen .lianxi_you .lilist {
    margin: 20px 0;
  }
  .lianxiwomen .lianxi_you .inputcla {
    display: block;
    background-color: #E8E8E8;
    border: 1px solid #D1CFCF;
    border-radius: 4px;
  }
  .lianxiwomen .lianxi_you input, .lianxiwomen .lianxi_you textarea {
    width: 70%;
    max-width: 230px;
    text-indent: 1em;
  }
  .lianxiwomen .lianxi_you input {
    height:　30px;
    line-height: 30px;
    width: 70%;
  }
  .lianxiwomen .lianxi_you textarea {
    padding: 8px 0;
  }
  .lianxiwomen .lianxi_you .lilist:last-child input {
    width: 50%;
    max-width: 120px;
    background-color: #7BC91E;
    color: #fff;
    text-indent: 0;
    border: 0;
  }
</style>
