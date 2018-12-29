<template>
  <div>
    <header class="article-header" style="margin-bottom: -40px;">
      <h1 itemprop="name">
          <!-- <a class="article-title" href="/articlePie"  @click="articleLink(post)">{{post.title}}</a> -->
          <router-link class="article-title" to="/articlePie" @click.native="articleLink(post)">{{post.title}}</router-link>
      </h1>
      <div class="article-meta">
        <div class="article-date">
            <i class="fa fa-calendar"></i>
            <router-link @click.native="articleLink(post)" to="/articlePie">
              <time datetime="post.date" itemprop="datePublished">{{post.date}}</time>
            </router-link>
            <!-- <a href="/articlePie" @click="articleLink(post)">
                <time datetime="post.date" itemprop="datePublished">{{post.date}}</time>
            </a> -->
        </div>
        <div class="article-category">
          <i class="fa fa-folder"></i>
            <a v-for="(categorie,index) in post.categories" :key=index class="article-category-link" href="categorie.permalink">{{categorie.name}} </a>
        </div>
        <div class="article-tag">
           <i class="fa fa-tag"></i>
            <a  v-for="(tag,index) in post.tags" :key=index  class="tag-link" href="tags.permalink">{{tag.name}}&nbsp;</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
import qs from 'qs'
export default {
  name: 'artcileHeader',
  props: {
    post: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
    articleLink (post) {
      // window.localStorage
      window.localStorage.setItem('post', qs.stringify(post))
      // this.$router.go(0)
      // this.$router.push({ path: '/articlePie' })
    }
  }
}
</script>

<style scoped>
@import '../../../style/main.css';
</style>
