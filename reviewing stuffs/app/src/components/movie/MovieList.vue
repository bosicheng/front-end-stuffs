<template>
    <div>
        <!-- 传值：由于commonHeader组件在movielist内所以movielist向commonHeader传值是父传子用props，在子组件中建立props属性去接收 -->
        <ul>
            <!-- 在原生vue不需要非得写:key，但是在vie-cli中v-for循环数组必须加:key='' -->
            <!-- goDetail的作用是转到电影详情页，怎么传递电影ID？加obj.id传参 -->
            <li class='movieList' v-for='(obj,index) in movieList' :key='index' @click='goDetail(obj.id)'>
                <div class='movie-img'>
                    <!-- 这里注意，不加冒号就是写死了！src必须加冒号 -->
                    <img :src="obj.img" alt="">
                </div>
                <div class='movie-info'>
                    <p>{{obj.nm}}</p>
                    <p>
                        <!-- <span v-for='(obj,index) in obj.genres' :key='index'>{{obj}} </span> -->
                        {{obj.cat}}
                    </p>
                    <p>
                        <!-- <span v-for='(person,index) in obj.casts' :key='index'>{{person.name}}</span> -->
                        {{obj.star}}
                    </p>
                    <p>{{obj.showInfo}}</p>
                </div>
            </li>
        </ul>
        <div>
            <img src="@/assets/loading.gif" alt="" v-show="isShow">
        </div>
    </div>
</template>

<script>

    // 在vue中怎么调用接口？用axios，用来发送ajax请求，原生ajax请求太复杂
    // https://www.jianshu.com/p/df464b26ae58
    // 下载以后会放在node.modules中，不用找文件夹直接Import就可以用

    import axios from 'axios'    

    // get和post区别：
    // 其中get一般用来获取数据，提交一些数据用post
    // get每次会在地址栏中显示参数，post不会
    // get请求数据量小,post大
    // get可以被缓存,post不可以

    import Vue from 'vue'


    export default {
        // 在vue-cli中data只能这么写，用data:{}是不可以的
        data(){
            return{
                movieList:[],
                isShow:false,
                resultLength:0
            }
        },
        methods:{
            
            load(){
                // 这里会出现跨域问题：无法访问猫眼接口数据，跨域是协议(http,https等)，域名(比如localhost)，端口(比如8080)不同时访问数据都是跨域
                // 可以用第三方bird解决跨域（其实有很多解决方法）https://bird.ioliu.cn/
                // 可以直接在前面加https://bird.ioliu.cn/v1?url=
                // 但是同样也可以在main.js直接设置全局变量，然后用Vue.config.xx来调用，当然需要先import Vue

                // 下面是promise中回调函数，成功调用then，失败调用catch
                // 后来修改为直接用本地json文件了，就不用bird了
                axios.get('./static/data/moviedata0.json').then(res=>{
                    console.log(res.data.data.movies);
                    // 这里有两个data是因为axios自己会把所有数据放进一个data里
                    this.resultLength = res.data.data.movies.length;
                    this.movieList = this.movieList.concat(res.data.data.movies);
                    this.isShow = false;
                }).catch(res=>{
                    console.log('获取数据失败')
                });
            },
            goDetail(id){
                // 改变地址
                // 这里需要传递电影的id，在es6语法中使用模板字符串拼接，反引号加${}，里面可以插入任何js表达式，可以是一个数组，对象甚至函数，对数组和对象会调用他们的toString方法
                this.$router.push(`/movie/movieDetail/${id}`);
            }
        },

        // 这里用created钩子函数，页面一加载马上开始处理ajax
        // 项目后期改为load函数放在methods下，页面一加载马上预加载数据然后滚动条到底再调用一次加载函数
        created () {
            this.load();
            // 目标：滚动条滑到最底部自动加载新数据，因为每页只有10个
            // 这里必须使用箭头函数！！!
            // 箭头函数和普通函数区别
            // 1、this指向  箭头函数中的this声明时的this,也就是指向父作用域
            //     普通函数的this指执行时的this
            // 2、不能 new 不能用于构造函数
            // 3、不能用arguments
            window.onscroll=()=>{
                // 取到滚动条滚动的高度
                // 兼容性
                let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                // 取到可视区的高度
                let clientHeight=document.documentElement.clientHeight;
                // 整个页面的高度
                let height=document.documentElement.scrollHeight;

                // 这里scrollHeight是不变的，所以当滚动条高度加可视区高度等于整个页面的高度时候可以判断滚动条已经到底
                if(scrollTop+clientHeight==height){
                    if(this.resultLength == 10){
                        this.isShow = true;
                        this.load();
                    }
                }
            }
        }
    }
</script>

<style scoped>

/* !!!弹性盒模型：当子部件内容比较大撑着子部件时flex-grow是无效的，需要将所有的子部件设置为width:0以后再进行盒模型 */
    .movieList{
        display: flex;
        padding: 0.2rem;
        font-size:14px;
        line-height: 1.8;
    }
    .movie-img{
        flex-grow:1;
        margin-right: 0.1rem;
        width: 0;
    }
    .movie-img img{
        width: 100%;
    }
    .movie-info{
        flex-grow:2;
        width: 0;
    }
</style>