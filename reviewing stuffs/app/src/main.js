import Vue from 'vue'
import App from './App'
import router from './router'

// 对于全局下的文件,类似common.css，直接在入口文件引入，但是由于其他组件引入还会调用，css不会再调用所以直接加引号
// 但是这里必须要写扩展名，上面可以不写
import '@/assets/common.css'
import '@/assets/rem.js'

Vue.config.productionTip = false

Vue.config.url='https://bird.ioliu.cn/v1?url='

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
