<template>
    <div class='wrapper'>
        <select v-model='selected'>
            <option v-for='sj in shuju'
                    :value='sj'>
                {{sj.title}}
            </option>
        </select>
        <router-link :to="{path: '/xinzeng', query: { selected: selected}}"
                     target='div'>
            <button>提交</button>
        </router-link>
        <span class='result'>选择结果为：{{selected}}</span>
    </div>
</template>
<script>
  export default{
    data () {
      return {
        selected: {},
        shuju: {
          moban1: {title: '文字模板', bianma: 'WEN_ZI'},
          moban2: {title: '图片文字模板', bianma: 'TUPIAN_WENZI'},
          moban3: {title: '视频文字模板', bianma: 'SHIPIN_WENZI'}
        }
      }
    }
  }
</script>
<style scoped>
    .wrapper {
        color: #000;
    }

    select {
        display: inline-block;
        margin: 20px;
        width: 300px;
        height: 50px;
    }

    select span {
        display: inline-block;
        margin: 0 8px;
        width: 30px;
        border: 1px solid red;
    }

    button {
        width: 120px;
        height: 40px;
        border: 1px solid #000;
        border-radius: 40px;
        background-color: #fff;
    }

    .result {
        display: block;
    }
</style>
