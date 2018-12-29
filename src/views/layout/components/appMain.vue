<template>
  <section id="main">
    <transition   name="fade-transform">
      <!-- <keep-alive> -->
        <component :is="key"></component>
         <!-- <router-view :key="key"></router-view> -->
      <!-- </keep-alive> -->
    </transition>
    <a id="rocket" :class="[show,launch]" @click="rocket()"></a>
    <footer id="footer">
      <div class="outer">
          <div id="footer-info" class="inner">
              © 2017-2018 <i class="fas fa-heart"></i> RuLinZi<br>
              Powered by <a href="http://hexo.io/" target="_blank">Hexo</a>
          </div>
      </div>
    </footer>
  </section>
</template>

<script>
import test from '@/test'
import test2 from '@/test2'
import articleList from '@/views/dashboard/components/articleList'
import articlePie from '@/views/dashboard/components/articlePie'
import { setTimeout } from 'timers'
export default {
  name: 'appMain',
  components: {test, articleList, articlePie, test2},
  data () {
    return {
      // 定义滚动条默认位置
      scrollTop: null,

      // 定义按钮默认状态
      isScrollTop: false,
      roc: null,
      show: '',
      launch: ''
    }
  },
  methods: {
    scroll () {
      alert('33')
    },
    rocket () {
      // let scrollTop = document.body.scrollTop + document.documentElement.scrollTop
      // let scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
      // console.log(scrollTop)
      this.launch = 'launch'
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 400)
    }
  },
  computed: {
    key: function () {
      // console.dir(this.$route.fullPath)
      return this.$route.path.split('/')[1]
      // return this.$route.fullPath
    }
  },
  mounted () {
    this.roc = document.getElementById('#rocket')
    // 监听滚动事件
    window.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop ||
                        window.pageYOffset ||
                        document.body.scrollTop ||
                        document.querySelector(this.el).scrollTop

      // 控制滚动按钮的隐藏或显示
      let height = window.innerHeight * 0.5
      if (this.scrollTop > height) {
        this.show = 'show'
        // this.launch = ''
      } else {
        this.show = ''
        this.launch = ''
      }
      // this.scrollTop > height ? this.show = 'show' : this.show = ''
    }, true)
  }
}
</script>

<style scoped>
@import '../../../style/main.css';
@import '../../../style/ironman.css';
.comment-link{
  float: right;
}
.comment-link svg{
  margin-right: 5px;
}
/* .article-footer:hover .comment-link{
  color:red;
} */
.article-footer a:hover {
  color: #565a5f;
}
#footer{
  font-size: 14px;
  color: #999;
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
  /* transition: -webkit-transform .6s  ease */
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
  position: absolute;  /*解决抖动问题*/

}
</style>
