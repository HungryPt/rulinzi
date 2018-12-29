<template>
  <div id="header" :class="[flod]">
    <div id="header-main"  class="header-inner">
      <div class="outer">
            <a href="https://yemengying.com/" id="logo">
              <i class="logo"></i>
              <span class="site-title">RuLinZi's Home</span>
            </a>
        <nav id="main-nav">

          <a class="main-nav-link">
            <router-link :to="{path:'/articleList'}" key="/articleList">首页</router-link>
          </a>
          <a class="main-nav-link">
            <router-link :to="{path:'/test'}">归档</router-link>
          </a>

          <a class="main-nav-link">
             <router-link to="/test2">分类</router-link>
          </a>

          <a class="main-nav-link">
             <router-link to="/test2">标签</router-link>
          </a>

          <a class="main-nav-link">关于</a>

          <a class="main-nav-link">留言</a>

          <a class="main-nav-link">友链</a>

          <a class="main-nav-link">正在读...</a>

        </nav>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      header: null,
      flod: null,
      scrollAction: {x: 'undefined', y: 'undefined'},
      scrollDirection: null
    }
  },
  methods: {
    scrollFunc () {
      if (typeof this.scrollAction.x === 'undefined') {
        this.scrollAction.x = window.pageXOffset
        this.scrollAction.y = window.pageYOffset
      }
      var diffX = this.scrollAction.x - window.pageXOffset
      var diffY = this.scrollAction.y - window.pageYOffset
      if (diffX < 0) {
        // Scroll right
        this.scrollDirection = 'right'
      } else if (diffX > 0) {
        // Scroll left
        this.scrollDirection = 'left'
      } else if (diffY < 0) {
        // Scroll down
        this.scrollDirection = 'down'
      } else if (diffY > 0) {
        // Scroll up
        this.scrollDirection = 'up'
      } else {
        // First scroll event
      }
      this.scrollAction.x = window.pageXOffset
      this.scrollAction.y = window.pageYOffset
    }

  },
  mounted () {
    this.header = document.getElementById('#header')
    // 监听滚动事件
    window.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop ||
                        window.pageYOffset ||
                        document.body.scrollTop ||
                        document.querySelector(this.el).scrollTop

      // 控制滚动按钮的隐藏或显示
      // let height = window.innerHeight * 0.2
      // this.scrollTop > height ? this.flod = 'flod' : this.flod = ''
      this.scrollFunc()
      if (this.scrollDirection === 'down') {
        // 页面向下滚动要做的事情
        this.flod = 'flod'
      } else if (this.scrollDirection === 'up') {
        // 页面向上滚动要做的事情
        // console.log(this.flod)
        this.flod = ''
      }
    }, true)
  }

}
</script>

<style scoped>
@import './header.css';
a {
  color:black
}
#header{
  position: fixed;
  width: 100%;
  top: 0;
  /* -webkit-transform: translate3d(0,-100%,0); */
  transition: transform .3s;
}
.flod{
  -webkit-transform: translate3d(0,-100%,0);
}
    /* -webkit-transform: translate3d(0,-100%,0);
    transition: transform .3s;
    position: fixed;
    width: 100%; */
</style>
