import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, { ak: 'Gl9RtmPg6ZuMpGuo4l6DEQfMUa9UwVWN' })

// import '@/permission'
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
