<template>
  <div class='wrapper'>
    <div class='mask'></div>
    <div class='denglu_wrapper'>
      <div class='colse'>
        <i class='icon-cross'
           @click='colse()'></i>
      </div>
      <div class='list' id='listjs'>
        <a v-for='(item,index) in list'
           @click='qiehuan(index)'>{{item}}</a>
      </div>
      <form class='dengru'
            method='post'>
        <p  v-for='(value,key) in initshuju'>
            <input type='text'
                   class='shuru'
                   :class='key'
                   :name='key'
                   :placeholder='value'
                   :title='value'
                   required
                   v-model='tijiaoshuju[key]'
                   @blur='pattern()' />
                   <small class='tishi_text' v-model='tishi[key]'>{{tishi[key]}}</small>
        </p>
        <input type='submit'
               class='queren'
               :value='list[number]' />
      </form>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      list: [],
      shuju: [],
      number: 0,
      initshuju: {},
      tijiaoshuju: {},
      tishi: {
        'username': '',
        'passwd': '',
        'zcusername': '',
        'zcpd': '',
        'zcaginpd': ''
      },
      USERINDEX: 0,
      PWDINDEX: 1
    }
  },
  created: function () {
    setTimeout(() => {
      this.initcolor()
      this.getxinxi()
      this.initshuju = this.shuju[0]
    }, 20)
  },
  mounted: function () {
    this.$nextTick(() => {
      this.listvalue()
    })
  },
  methods: {
    colse: function () {
      this.$router.push({path: '/shouye'})
    },
    initcolor: function () {
      document.getElementById('listjs').getElementsByTagName('a')[0].className = 'acla'
    },
    listvalue: function () {
      this.list = ['登录', '注册']
    },
    getxinxi: function () {
      this.shuju = [
        {
          'username': '请输入用户名',
          'passwd': '请输入密码'
        },
        {
          'zcusername': '注册用户名以4-16位数字/字母/下划线组成',
          'zcpd': '密码以6-16位数字/字母组成，以字母开头，区分大小写',
          'zcaginpd': '请输入确认密码'
        }
      ]
    },
    qiehuan: function (index) {
      let ajs = document.getElementById('listjs').getElementsByTagName('a')
      this.initshuju = this.shuju[index]
      this.number = index
      for (let i = 0; i < ajs.length; i++) {
        ajs[i].className = ''
      }
      if (ajs[index].className === '') {
        ajs[index].className = 'acla'
      }
    },
    pattern: function () {
      let tishi = document.getElementsByClassName('tishi_text')
      let namepattern = /^[a-zA-Z0-9_]{4,16}$/g
      let psdpattern = /^[a-zA-Z][0-9]{6,16}$/g
      for (let i in this.tijiaoshuju) {
        if (i && i === 'username') {
          if (namepattern.test(this.tijiaoshuju[i])) {
            this.tishi[i] = '用户名正确'
            tishi[this.USERINDEX].style.color = '#367004'
          } else {
            this.tishi[i] = '用户名错误'
            tishi[this.USERINDEX].style.color = '#A2020F'
          }
        } else if (i && i === 'passwd') {
          if (psdpattern.test(this.tijiaoshuju[i])) {
            this.tishi[i] = '密码正确'
            tishi[this.PWDINDEX].style.color = '#367004'
          } else {
            this.tishi[i] = '密码有误'
            tishi[this.PWDINDEX].style.color = '#A2020F'
          }
        } else if (i && i === 'zcusername') {
          if (namepattern.test(this.tijiaoshuju[i])) {
            this.tishi[i] = '用户名可以使用'
            tishi[this.USERINDEX].style.color = '#367004'
          } else {
            this.tishi[i] = '4-16位的字母/数字/下划线'
            tishi[this.USERINDEX].style.color = '#A2020F'
          }
        } else if (i && i === 'zcpd') {
          if (psdpattern.test(this.tijiaoshuju[i])) {
            this.tishi[i] = '密码格式正确'
            tishi[this.PWDINDEX].style.color = '#367004'
          } else {
            this.tishi[i] = '6-16位，以字母开头，区分大小写'
            tishi[this.PWDINDEX].style.color = '#A2020F'
          }
        } else if (i && i === 'zcaginpd') {
          if (this.tijiaoshuju.zcpd && this.tijiaoshuju.zcpd === this.tijiaoshuju.zcaginpd) {
            this.tishi[i] = '确认密码正确'
            tishi[this.PWDINDEX].style.color = '#367004'
          } else {
            this.tishi[i] = '与密码输入不一致'
            tishi[this.PWDINDEX].style.color = '#A2020F'
          }
        }
      }
    }
  }
}
</script>
<style scoped>
  .wrapper{
    position: relative;
  }
  .wrapper .mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .wrapper .denglu_wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    width: 26%;
    background-color: #fff;
  }
  .wrapper .denglu_wrapper .colse {
    position: absolute;
    top: 0;
    right: 10px;
    z-index: 10000;
    width: 30px;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    color: #D1D1D1;
    cursor: pointer;
  }
  .wrapper .denglu_wrapper .colse:hover {
    font-size: 15px;
    color: #2097D9;
  }
  .wrapper .list {
    padding-left: 20px;
    font-size: 1em;
    border-bottom: 1px solid #D0D6D9;
  }
  .wrapper .list a {
    display: inline-block;
    width: 60px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #787D82;
  }
  .wrapper .list .acla {
    border-bottom: 1px solid #2097D9;
  }
  .wrapper .dengru {
    padding: 20px 0;
  }
  .wrapper .shuru,.wrapper .tishi_text,.wrapper .queren {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
  .wrapper .dengru .tishi_text {
    height: 20px;
    line-height: 20px;
    font-size: 10px;

  }
  .wrapper .dengru .shuru {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    border: 1px solid #D0D6D9;
  }
  .wrapper .dengru .queren {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #2097D9;
    border: 1px solid #2097D9;
    color: #fff;
  }
</style>
