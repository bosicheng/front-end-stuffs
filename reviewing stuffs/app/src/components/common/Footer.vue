<template>
    <div>
        <ul class='footer' :style="{'background':bg}">
            <!-- $emit第一个是方法名，后面的是参量 -->
            <li @click="$emit('change','red','movie')"><router-link to="/movie/movieList">电影</router-link></li>
            <li @click="$emit('change','green','music')"><router-link to="/music/musicList">音乐</router-link></li>
            <li @click="$emit('change','blue','book')"><router-link to="/book/Book">书籍</router-link></li>
            <li @click="$emit('change','orange','photo')"><router-link to="/photo/photoList">图片</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['bg'],
        methods:{}
    }
</script>

<style scoped>
    .footer{
        display: flex;
        height: 1rem;
        /* 文档定位以后脱离文档流，已经不再受app的margin限制 */
        position: fixed;
        bottom: 0;
        line-height: 1rem;
        /* 这里注意，已定位的元素宽度是内容撑的，这里需要加宽度 */
        width: 100%;
    }
    .footer li{
        flex-grow: 1;
        text-align: center;
        color: #ccc;
    }
    /* 让颜色发白 */
    .footer li a{
        color: #999;
    }
    .footer li a.router-link-active{
        color: #fff;
    }
</style>