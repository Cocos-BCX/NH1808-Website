// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import './assets/css/public.css'
// import './assets/bower_components/smooth-scroll/dist/js/smooth-scroll.min.js'
import { Select, Option, Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import JsonViewer from 'vue-json-viewer'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../libs/bcx.min'
import '../libs/core.min'
import '../libs/plugin.min'
import { initBcx, browserConnect, desktopConnect } from '../libs/bcx.api'

initBcx()
// browserConnect().then((res)=>{
//   console.log('browserConnect success')
// }).catch((err)=>{
//   console.log('browserConnect fail')
//   console.log(err)
//   desktopConnect().then((res)=>{
//     console.log('desktopConnect success')
//     console.log(res)
//   }).catch((err)=>{
//     console.log('desktopConnect fail')
//     console.log(err)
//   })
// })

import {
  MenuItem,
  MenuItemGroup,
  Pagination,
  Loading
} from 'element-ui'

Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios)
Vue.use(JsonViewer)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Pagination)
Vue.use(Loading)
Vue.use(VueI18n);
Vue.use(Select);
Vue.use(Option);


const i18n = new VueI18n({
  locale: 'zh',    // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale 
  messages: {   // 中文语言包
    'en': require('./common/lang/en').lang,
    'zh': require('./common/lang/zh').lang  // 英文语言包
  }
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
