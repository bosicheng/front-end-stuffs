<template>
    <div class='photo'>
        <ul>
            <li v-for='(photo,index) in photoData' :key='index'>
                
                <!-- 思考流程：设计点击图片时放大，是需要通过路由切换组件。那么路由切换组件有两种方式： -->
                <!-- 1.在点击的标签外加routerlink to -->
                <!-- 2.点击事件加编程式导航：this.$router.push -->

                <!-- 用routerlink to直接拼接字符串就可以 -->
                <router-link :to="'/photo/PhotoDetail/'+index">
                    <img :src="photo.src" alt="">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    // 这里要调用store的方法也要import export
    import store from '@/vuex/store'
    export default {
        store,
        data(){
            return{
                photoData:[]
            }
        },  
        created() {
            axios.get('./static/data/photodata.json').then(res => {
                this.photoData=res.data.photoData;
                this.$store.commit('addPhoto',this.photoData);
            }).catch(res => {
                console.log('请求失败')
            })
        },
    }
</script>

<style scoped>
    .photo li{
        width: 50%;
        float: left;
    }
    .photo img{
        width: 100%;
        /* 没有display:block图片会有白边！！！*/
        /* 在div中的img在margin padding 为0，且broder为none的情况下依然存在白边，原因在于，
        img标签默认情况下display:inline-block;  img在div中的白边就是因为inline-block；造成的，
        所以此时将img的display设置为block；白边就消失了 */
        display: block;
    }
</style>