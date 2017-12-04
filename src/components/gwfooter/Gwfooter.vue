<template>
    <div class='wrapper'>
        <div class='container'>
            <div class='text'>
                <ul class='ullist'>
                    <li v-for='item in dataone'>
                        {{item}}
                    </li>
                </ul>
                <ul class='ullist'>
                    <li v-for='item in datatwo'>
                        {{item}}
                    </li>
                </ul>
                <ul class='ullist'>
                    <li v-for='item in datathree'>
                        {{item}}
                    </li>
                </ul>
                <ul class='ullist'>
                    <li v-for='item in datafore'>
                       {{item}}
                    </li>
                </ul>
            </div>
            <div class='Img'>
                <img width='180px'
                     height='180px'
                     src='static/img/wx.jpg'
                     alt='二维码'>
            </div>
        </div>
        <div class='footer'>
            <div>
                <span>©2017 美华尚医（成都）生物科技有限公司</span>
                <a href='javascript:'>蜀备20044005</a>
            </div>
            <div class='bottomfooter'>
                <a href='javascript:'>法律声明</a>
                <a href='javascript:'>隐私保护</a>
                <a href='javascript:'>联系我们</a>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    data () {
      return {
        dataone: ['企业介绍', '企业新闻', '尚医文化', '公益行动'],
        datatwo: ['研发中心', '能量理论', '体验招募'],
        datathree: ['操作指南', '维修指南', '健康中心', '人才招聘'],
        datafore: ['分销代理', '项目投资', '实验合作']
      }
    }
  }
</script>
<style scoped>
  .wrapper {
    width: 100%;
    font-size: 0.7rem;
    background-color: #F2F2F2;
    border-top: 2px solid #F0EFEF;
  }

  .wrapper .container {
    width: 80%;
    height: 40vh;
    margin: 0 auto;
    padding-top: 30px;
  }

  .wrapper .container .text {
    width: 80%;
    height: auto;
  }

  .wrapper .container .ullist {
    float: left;
    margin-right: 18%;
  }

  .wrapper .container .ullist li {
    height: 30px;
    line-height: 30px;
    color: #605858;
  }
  .wrapper .container .ullist li:first-child {
    font-weight: bold;
    color: #605858;
  }
  .wrapper .container .Img {
    width: 20%;
    float: right;
    margin: 10px 0;
  }

  hr {
    border: 1px solid #D6D6D6;
  }

  .footer {
    width: 80%;
    margin: 0 auto;
    padding: 10px 0 25px 0;
    text-align: left;
    border-top: 1px solid #D6D6D6;
  }
  .footer a:hover {
    /*color: #fff;*/
  }
  .wrapper .bottomfooter {
    margin-top: 10px;
  }
  .wrapper .bottomfooter a {
    display: inline-block;
    height: 20px;
    padding: 0 10px;
    line-height: 20px;
    color: #3D3C3C;
    border-right: 1px solid #D6D6D6;
  }
  .wrapper .bottomfooter a:last-child {
    border-right: 0;
  }
</style>
