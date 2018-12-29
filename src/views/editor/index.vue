<template>
  <div>
    <div style="display:inline-block;width:50%;">
            <!-- textarea之间不要有空格 -->
            <textarea style="display:inline-block;width:100%;height: 542px;" v-model='content'></textarea>
    </div>
    <div class="article-entry"  style="top: 0;
    position: fixed;
    left: 700px;height: 100%;
    width: 45%;" >
      <div id="show-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor',
  data () {
    return {
      'content': '',
      'converter': null
    }
  },
  watch: {
    'content': 'contentChanged'
  },
  mounted () {
    this.init()
    // this.contentChanged()
  },
  methods: {
    init () {
      var showdown = require('showdown')
      var converter = new showdown.Converter()
      this.converter = converter
    },
    contentChanged () {
      var html = this.converter.makeHtml(this.content)
      document.getElementById('show-content').innerHTML = html
      var a = document.querySelectorAll('#show-content a')
      console.dir(a.length)
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

</style>
