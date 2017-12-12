<template>
    <div class='xinzeng'>
        <div class='outbox'>
            <div class='box'
               v-for='(value,key) in selected'>
                <span>{{value}}</span>
                <input v-show='value != "内容"' type="text">
                <textarea v-show='value == "内容"'></textarea>
            </div>
            <button>提交</button>
        </div>
    </div>
</template>
<script>
  import {mobanziduan} from '@/common/js/ziduan.js'
  export default{
    data () {
      return {
        selected: []
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.getValue()
      })
    },
    methods: {
      getValue () {
        let bianji = this.$route.query.selected
        this.selected = mobanziduan(bianji.bianma)
        console.log(this.selected)
      }
    }
  }
</script>
<style scoped>
    .xinzeng {
        height: 500px;
        padding-top: 20px;
        background-color: #eee;
        color: #000;
    }
    .outbox {
        width: 90%;
        padding: 20px 0;
        margin: 0 auto;
        background-color: #fff;
        border: 1px solid #DDDEF1;
        border-radius: 8px;
    }

    .box {
        position: relative;
        width: 50%;
        height: 40px;
        margin: 20px auto;
        position: relative;
    }
    span,input,textarea {
        position: absolute;
        display: inline-block;
        border: 1px solid #000;
    }

    span{
        top: 0;
        left: 0;
        width: 8%;
        height: 35px;
        line-height: 35px;
        background-color: #eee;
        border-right: none;
        border-radius: 10% 0 0 10%;
    }
    input{
        top: 0;
        left: 8%;
        width: 50%;
        height: 35px;
        line-height: 35px;
        border-radius: 0 3% 3% 0;
    }
    textarea{
        top: 0;
        left: 8%;
        width: 100%;
        height: 200px;
        resize: none;
        border-radius: 0 3% 3% 0;
    }
    button{
        width: 120px;
        height: 40px;
        margin-top: 200px;
        border: 1px solid #000;
        border-radius: 40px;
        background-color: #fff;
    }
</style>
