<template>
  <div id="app">
    <common-header :bg="bgColor" :title="title" ></common-header>
        <router-view/>
    <common-footer :bg="bgColor" @change="fn"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'
// 不可以在这里引axios!!!要在分组件里import


export default {
  name: 'App',
  data(){
    return{
      bgColor:'red',
      title:'movie'
    }
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    fn(color,title){
      console.log(color);
      // this.bg = color;
      this.bgColor = color;
      this.title = title;

    }
  },
  created () {
    let url = this.$route.path; //    /music/musicList
    let str = url.split('/')[1];  // ['','music','musicList'] => 'music'
    switch(str){
      case 'music':
        this.bgColor = 'green';
        break;
      case 'movie':
        this.bgColor = 'red';
        break;
      case 'book':
        this.bgColor = 'blue';
        break;
      case 'photo':
        this.bgColor = 'orange';
        break;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 由于是在手机屏幕，宽度固定，所以设置margin会把自己往里挤 */
  margin:1rem 0;
  overflow: hidden;
}
body{
  font-size:0.32rem;
  margin: 0;
}

</style>
