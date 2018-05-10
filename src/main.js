// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import vgl from 'vue-golden-layout'
Vue.use(vgl)
Vue.use(Vuetify)
Vue.config.productionTip = false
const {layoutGolden, glComponent, glRow, glCol, glStack} = {
  install: function (Vue) {
    Vue.component('vgl', vgl)
  }
}
export default {layoutGolden, glComponent, glRow, glCol, glStack}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, layoutGolden, glComponent, glRow, glCol, glStack },
  template: '<App/>'
})
