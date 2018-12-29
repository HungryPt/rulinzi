<template>
  <div class= "articlePie">
    <article-header :post=post></article-header>
    <!-- <vue-markdown :source="content"></vue-markdown> -->
    <!-- <div style="display:inline-block;width:50%;"> -->
            <!-- textarea之间不要有空格 -->
            <!-- <textarea v-model='content'></textarea> -->
    <!-- </div> -->
    <div class="article-entry">
      <blockquote>
        <p>为什么要了解下区块链呢？因为区块链最近实在是太火了，火到我爸都听说了，总让我给他科普一下。。。。 </p>
      </blockquote>
      <div id="show-content"></div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import articleHeader from './articleHeader'
import qs from 'qs'
// import Cookies from 'js-cookie'
export default {
  name: 'articlePie',
  components: {
    VueMarkdown, // 声明组件
    articleHeader
  },
  data () {
    return {
      'content': '',
      'converter': null
    }
  },
  mounted () {
    this.init()
    this.contentChanged()
  },
  created () {
    // console.dir(this.$router.post.id)
    this.post = qs.parse(window.localStorage.getItem('post'))
  },
  watch: {
    'content': 'contentChanged'
  },
  methods: {
    init () {
      var showdown = require('showdown')
      var converter = new showdown.Converter()
      this.converter = converter
    },
    changeDefOver (ele) {
      ele.style.textDecoration = 'underline'
    },
    contentChanged () {
      // var html = this.converter.makeHtml(this.content)
      var helloWorld = require('@/articles/hello-world.md')
      var html = this.converter.makeHtml(helloWorld)
      document.getElementById('show-content').innerHTML = html
      var a = document.querySelectorAll('#show-content a')
      for (var i = 0; i < a.length; i++) {
        a[i].style.color = '#38b7ea'
        a[i].style.textDecoration = 'none'
        // a[i].addEventListener('mouseover', this.changeDefOver(a[i]))
      }
      // a.text-decoration = 'none;'
    }
  }
}
</script>

<style scoped>
@import '../../../style/articlePie.css';
#show-content a {
  color: #38b7ea;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
div {
    margin: 40px 0;
}
.articlePie{
  background: #fff;
}
</style>
