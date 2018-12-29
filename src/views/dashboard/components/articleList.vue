<template>
  <div>
      <article v-for="(post,index) in contents" :key=index class="article">
        <div class="article-inner">
            <article-header :post=post></article-header>
            <div class="article-entry" itemprop="articleBody">

              <p></p><blockquote>
              <p>{{post.excerpt}} </p>
              </blockquote><p></p>
              <p class="article-more-link">
                  <!-- <a href="/articlePie" @click="articleLink(post)">查看更多</a> -->
                  <router-link @click.native="articleLink(post)" to="/articlePie">查看更多</router-link>
              </p>
            </div>
            <footer class="article-footer">
              <div class="share-container">
               </div>
                <a data-url="http://yemengying.com/2018/02/11/hash-blockchain/" data-id="cjpp5pue5001boj5sgcl7qrj3" class="article-share-link"><i class="fa fa-share"></i>分享到</a>
                <a href="http://yemengying.com/2018/02/11/hash-blockchain/#comments" class="comment-link" data-disqus-url="http://yemengying.com/2018/02/11/hash-blockchain/"><i class="fas fa-comment"></i>评论</a>
            </footer>
        </div>
      </article>
      <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
  </div>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
// import helloWorld from '@/articles/hello-world.md'
import pagination from './pagination'
import articleHeader from './articleHeader'
import Cookies from 'js-cookie'
import qs from 'qs'
let contents = require('@/data/content.json')
export default {
  name: 'articlePie',
  data () {
    return {
      // content: helloWorld,
      contents: [],
      total: null, // 记录总条数
      display: 10, // 每页显示条数
      current: 1
    }
  },
  methods: {
    pagechange (currentPage) {
      Cookies.set('pages', currentPage)
      console.log(currentPage)
      this.contents = []
      this.getData(currentPage)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    articleLink (post) {
      // window.localStorage
      window.localStorage.setItem('post', qs.stringify(post))
      // this.$router.push({ path: '/articlePie' })
    },
    getData (currentPage) {
      this.current = currentPage
      let to = currentPage * this.display
      this.contents = []
      if (this.total > to) { // 23 30
        for (let i = (currentPage * this.display - 10); i < currentPage * this.display; i++) {
          this.contents.push(contents.posts[i])
        }
      } else {
        for (let i = (currentPage * this.display - 10); i < (currentPage * this.display - 10) + this.total % this.display; i++) {
          this.contents.push(contents.posts[i])
          // 20
        }
      }
    }
  },
  components: {
    'v-pagination': pagination,
    articleHeader
    // VueMarkdown // 声明组件
  },
  created () {
    this.total = contents.posts.length
    // Cookies.get('pages') === undefined ? this.getData(this.current) : (this.getData(Cookies.get('pages')), this.current = Cookies.get('pages'))
    if (Cookies.get('pages') === undefined) {
      this.getData(this.current)
    } else {
      this.getData(Cookies.get('pages'))
      this.current = parseInt(Cookies.get('pages'))
    }
  }
}
</script>

<style scoped>
@import '../../../style/main.css';
.comment-link{
  float: right;
}
.comment-link svg{
  margin-right: 5px;
}
.article {
    margin: 40px 0;
}
/* .article-footer:hover .comment-link{
  color:red;
} */
.article-footer a:hover {
  color: #565a5f;
}
</style>
