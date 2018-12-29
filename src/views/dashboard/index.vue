<template>
  <div>
    <my-header></my-header>
    <div >
      <div><Sidebar></Sidebar></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import myHeader from '@/views/layout/components/header/header'
import Sidebar from '@/views/layout/components/Sidebar'
export default {
  name: 'dashboard',
  components: {myHeader, Sidebar},
  data () {
    return {
      emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    }
  }
}
</script>

<style scoped>

</style>
