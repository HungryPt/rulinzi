// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
import store from './store'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import i18n from './lang'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import animate from 'animate.css'
Vue.use(animate)
Vue.config.productionTip = false
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(animate)
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component(CollapseTransition.name, CollapseTransition)
router.afterEach((to, from, next) => {
//   window.scrollTo(0, 0)
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App)
})
