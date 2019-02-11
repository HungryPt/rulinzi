<template>
  <div>
      <article class="article">fd</article>
        <vue-disqus shortname="rulinzi" :identifier = "post.path"></vue-disqus>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'test',
  data () {
    return {
      post: null
    }
  },
  created () {
    // console.dir(this.$router.post.id)
    // alert('ds')
    this.post = qs.parse(window.localStorage.getItem('post'))
    this.path = this.post.text
    console.dir(this.post.text)
  }
}
</script>

<style scoped>
@import './style/main.css';

i {
  margin: 40px 0;
  display: block;
}
</style>
