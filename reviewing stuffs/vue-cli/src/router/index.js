import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index.vue'
import List from '@/components/List.vue'

Vue.use(Router)

// export defalut是导出一个模块
export default new Router({
  // mode属性默认是hash
  // history可以消除url中井号
  mode:'history',


  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: Index,

      // 在index页配置钩子函数
      beforeEnter:(to,from,next)=>{
        console.log(to);
        // 路由要跳转的路径信息
        console.log(from);
        // 路由跳转前的路径信息
        next();
        // 路由的控制参数，默认true跳转，false时不跳转
      },
    },
    {
      path: '/list',
      name: 'HelloWorld',
      component: List
    }
  ]
})
