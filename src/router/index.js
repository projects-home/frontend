import Vue from 'vue'
import Router from 'vue-router'
import collection from '../views/collect-monitor-index'
import preprocess from '../views/preprocess-index'
import mainindex from '../views/main-index'
import preprocessSms from '../views/preprocess-sms'
import preprocessVoice from '../views/preprocess-voice'
import transactionMonitor from '../views/transaction-monitor'
import pricing from '../views/pricingAndWarehousing'
import appreciation from '../views/preprocess-appreciation'
import account from '../views/account'
import mainframe from '../views/main-frame'
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';

Vue.use(iView, { locale });
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainindex',
      component: mainindex
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/preprocess',
      name: 'preprocess',
      component: preprocess
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: pricing
    },
    {
      path: '/mainframe',
      name: 'mainframe',
      component: mainframe
    } ,
    {
      path: '/preprocessSms',
      name: 'preprocessSms',
      component: preprocessSms
    } ,
    {
      path: '/preprocessVoice',
      name: 'preprocessVoice',
      component: preprocessVoice
    },
    {
      path: '/appreciation',
      name: 'appreciation',
      component: appreciation
    },
    {
      path:'/transactionMonitor',
      name:'/transactionMonitor',
      component:transactionMonitor
    },
    {
      path: '/account',
      name: 'account',
      component: account
    }
  ]
})
