<template>
  <div>
  <div class= "articlePie">
    <article-header :post=post></article-header>
    <div class="article-entry">
      <blockquote>
        <p>{{post.excerpt}} </p>
      </blockquote>
      <div id="show-content"></div>
    </div>
  </div>
  <section id="comments">
    <vue-disqus-embed :title="disqusTit" :identifier="identifier" :url="disqusUrl" />
  </section>
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
      'converter': null,
      path: '',
      disqusUrl: '',
      identifier: '',
      disqusTit: ''
    }
  },
  mounted () {
    this.init()
    this.contentChanged()
    console.dir(this.disqusUrl + this.identifier + this.disqusTit)
    this.disqusUrl = this.post.text
    this.identifier = this.post.id
    this.disqusTit = this.post.title
    console.dir(this.disqusTit)
  },
  created () {
    // console.dir(this.$router.post.id)
    // alert('ds')
    this.post = qs.parse(window.localStorage.getItem('post'))
    this.path = this.post.text
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
      var path = this.path
      var helloWorld = require('@/articles/' + path)
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
#comments{
  padding: 10px;
  margin: 40px 0;
}

</style>
