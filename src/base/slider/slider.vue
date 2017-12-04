<template>
    <div class='slider'
         ref='slider'>
        <div class='wrapper'
             ref='sliderList'>
            <slot>
            </slot>
        </div>
        <div style='display: none' class='dots'>
            <div id='pre'><a @click='_pre()' href="javascript: "><</a></div>
            <div id='next'><a @click='_next()' href="javascript: ">></a></div>
        </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'slider',
    props: {
      // 是否无缝循环轮播
      loop: {
        type: Boolean,
        default: true
      },
      // 是否自动播放
      autoPlay: {
        type: Boolean,
        default: true
      },
      // 时间间隔
      interval: {
        type: Number,
        default: 4000
      }
    },
    data () {
      return {
        pageIndex: 0
      }
    },
    created () {
      setTimeout(() => {
        // this._setSliderWidth()
        this._initSlider()
      }, 20)
    },
    mounted () {
      this.$nextTick(() => {
        this._setSliderWidth()
        if (this.autoPlay) {
          this._play()
        }
      })
      // 监听事件，当屏幕尺寸发生改变时触发
      window.addEventListener('isresize', () => {
        // 如果slider没有没有加载时
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true)
        // better-scroll的方法，刷新
        this.slider.refresh()
      })
    },
    methods: {
      _setSliderWidth (isresize) {
        this.children = this.$refs.sliderList.children
        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          child.className = 'item-slider'

          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        if (this.loop) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderList.style.width = width + 'px'
      },
      _initSlider () {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.8,
          snapSpeed: 500
        })
        // 给slider绑定一个事件，当滚动结束时触发
        this.slider.on('scrollEnd', () => {
          this.pageIndex = this.slider.getCurrentPage().pageX

          this.pageIndex += 1
          // if (this.loop) {
          //   this.pageIndex -= 1
          // }
          // if (this.autoPlay) {
          //   // 以免手托后又滚动
          //   // clearTimeout(this.timer)
          //   this._play()
          // }
        })
      },
      _play () {
        // this.pageIndex += 1

        // if (this.loop) {
        this.pageIndex += 1
        console.log(this.pageIndex)
        if (this.pageIndex === 1) {
          this.pageIndex = 0
          console.log(this.pageIndex)
        }
        // }
        // if (this.pageIndex > 1) {
        //   this.pageIndex = 0
        // }
        this.timer = setInterval(() => {
          // 0表示y方向
          this.slider.goToPage(this.pageIndex, 0, 800)
        }, this.interval)
      },
      _next () {
        // clearTimeout(this.timer)
        this.pageIndex += 1
        this.slider.goToPage(this.pageIndex, 0, 100)
      },
      _pre () {
        // clearTimeout(this.timer)
        this.pageIndex -= 1
        this.slider.goToPage(this.pageIndex, 0, 100)
      }
    },
    // 组件销毁时期，进行资源清理
    destroyed () {
      clearTimeout(this.timer)
    }
  }
</script>
<style scoped>
    .slider {
        min-height: 1px;
    }
    .slider .wrapper {
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
    }

    .item-slider {
        position: relative;
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
    }
    a{
        display: block;
        width: 105%;
        overflow: hidden;
        text-decoration: none;
    }
    a:hover {
        color: #8C8C8C;
    }
    img {
        display: block;
        width: 100%;
        height: 600px;
    }
    #pre, #next {
        position: absolute;
        display: inline-block;
        top: 40%;
        font-size: 2em;
        color: #fff;
        cursor: pointer;
    }
    #pre {
        left: 1%;
    }

    #next {
        right: 1%;
    }
    .dots a{
        width: 40px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-radius: 8%;
    }
    .dots a:hover{
        background-color: #636874;
        color: #fff;
    }
</style>
