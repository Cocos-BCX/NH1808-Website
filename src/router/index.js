import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyAssets from '@/components/MyAssets'
import TradingMarket from '@/components/TradingMarket'
import CreateAssets from '@/components/CreateAssets'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/myassets',
      name: 'MyAssets',
      component: MyAssets
    },
    {
      path: '/tradingmarket',
      name: 'TradingMarket',
      component: TradingMarket
    },
    {
      path: '/createassets',
      name: 'CreateAssets',
      component: CreateAssets
    }
  ]
})
