<template>
<!-- 这个文件整个部分是一个组件，需要被其他全部组件调用 -->
    <div>
        <!-- 给div加背景为传过来的值，也就是值用在属性中：要用v-bind（简写为:）为:style="{'background':bg}"     当然写在内容中用{{}} -->
        <!-- 如果是 id="'title'"就说明id已经写死title不能改，如果要在:title中写死，要用:title="'title'"强制使用字符串，这里双引号单引号不能改 -->
        <!-- 写死值要再加一个引号！ -->
        <!-- 这里不可以直接写red之类，只要直接写都会自动去下面找值,写死全部加引号 -->
        <div class="header" :style="{'background':bg}">
            <span class='header-home'>首页</span>
            <span class='header-title'>{{title}}</span>
            <!-- 这里在设置样式时title是居中的，需要浮动或者首页span定位，但是最好不这么做，再加一个span用display:flex -->
            <span class='header-space'></span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['bg','title']
    }
</script>

<style scoped>
    .header{
        height: 1rem;
        line-height: 1rem;
        /* 行元素在父元素中水平居中：直接当做文字处理 */
        text-align: center;
        color: #fff;
        display: flex;
        /* 元素定位以后脱离文档流，不受app点多margin限制了 */
        position: fixed;
        top:0;
        /* 这里由于头部需要fixed固定，元素定位以后宽度是内容撑的，所以必须加宽度 */
        width: 100%;
        
    }
    .header-home,.header-space{
         width: 1rem;

        /* 首行缩进 */
        text-indent: 0.2rem
    }
    .header-title{
        flex-grow: 1;
        text-align: center;
        font-size: 0.5rem;
        font-weight: bold
    }
</style>