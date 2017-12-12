<template>
  <div  class='shouyeslider'
        id='containjs'>
    <div class='sliderwrapper'
         id='sliderjs'
         style='left: 0'>
      <div  v-for='item in textdata'
            :key='item'>
        <img class='imgjs'
             :src='item'
             alt='图片'>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        textdata: ['static/img/mhsylunbo.jpg', 'static/img/chanpinlunbo.jpg'],
        width: 0,
        clientw: 0
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.sliderwidth()
      })
    },
    methods: {
      sliderwidth: function () {
        let containjs = document.getElementById('containjs')
        let sliderjs = document.getElementById('sliderjs')
        let imgjs = sliderjs.getElementsByClassName('imgjs')
        this.clientw = containjs.clientWidth
        for (let i = 0; i < imgjs.length; i++) {
          let child = imgjs[i]
          child.parentNode.className = 'item-slider'
          child.style.width = this.clientw + 'px'
          this.width += this.clientw
        }
        sliderjs.style.width = this.width + 'px'

        setInterval(() => {
          this.setleft(sliderjs)
        }, 5000)
      },
      setleft: function (sliderjs) {
        let left = parseInt(sliderjs.style.left)
        sliderjs.style.left = -(left + this.clientw) + 'px'
        let num = parseInt(sliderjs.style.left) + parseInt(this.clientw)
        if (num === 0) {
          setTimeout(() => {
            sliderjs.style.left = 0
            console.log(sliderjs.style.left)
          }, 5000)
        }
      }
    }
  }
</script>
<style scoped>
    .shouyeslider {
        position: relative;
        height: 100vh;
        margin-top: 60px;
        overflow: hidden;
    }

    .sliderwrapper {
        position: absolute;
        top: 0;
    }

    .item-slider {
        position: relative;
        float: left;
        box-sizing: border-box;
        /*overflow: hidden;*/
        text-align: center;
    }
    img {
      height: 90vh;
    }
</style>
