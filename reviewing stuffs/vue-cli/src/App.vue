<template>
<!-- vuex是用来状态管理的
可以用来存值取值，相当于公共的池子 -->
<!-- 就比如父组件之间传值只能父传子再传父，但是vuex可以直接解决 -->
  <div id="app">
    <router-link to='/index'>首页</router-link>
    <router-link to='/list'>列表页</router-link>
    </br>
    
    <button @click='goHome()'>首页</button>
    <button @click='goBack'>&lt;返回</button>
    <button @click='goNext'>下一页</button>
    
    <!-- 路由切换动画 -->
    <!-- 要把router-view标签扔进去 -->
    <transition name='fade'>
      <router-view></router-view>
    </transition>
    

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goHome(){

      // 为什么用$？因为main.js中router是一个属性
      this.$router.push('/')
    },
    goBack(){
      this.$router.go(-1)
    },
    goNext(){
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;

}
.fade-enter-active{
  transition:opacity 2s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;

}
.fade-leave-active{
  transition:opacity 2s;
}
.fade-leave-to{
  opacity: 0;
}
</style>
