<template>
  <div class="container">
    <div id='fixedtop'>
      <header id="header"><my-header></my-header></header>
    </div>
    <div class="outer">
      <Sidebar></Sidebar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import myHeader from '@/views/layout/components/header/header'
import Sidebar from '@/views/layout/components/Sidebar'
import appMain from '@/views/layout/components/appMain'
export default {
  name: 'layout',
  components: {myHeader, Sidebar, appMain},
  data () {
    return {
      emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    }
  }
}
</script>

<style scoped>
@import '../../style/main.css';
  .container {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .container > .outer {
    margin-bottom: 30px;
  }
  #fixedtop{
    margin-top: 60px
  }
</style>
