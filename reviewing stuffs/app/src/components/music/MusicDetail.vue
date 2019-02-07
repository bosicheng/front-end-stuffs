<template>
    <div>
        <!-- 这里把autoplay去掉，很烦 -->
        <aplayer :list="musicdata" v-if="isShow" :showLrc="true"
         :music="musicdata[0]"
/>
        <!-- {{$route.params.musicId}} -->
    </div>
</template>

<script>
    import aplayer from 'vue-aplayer'
    import axios from 'axios'
    export default {
        data(){
            return{
                musicdata:[],
                isShow:false
            }
        },
        components: {
            aplayer
        },
        created() {
            axios.get('./static/data/musicdata.json').then(res =>{
                console.log(res.data.musicData);
                res.data.musicData.forEach(obj => {
                    this.musicdata.push({
                        // 这个aplayer有的链接坏了会报错其他正常不会影响运行
                        src:obj.src,
                        title:obj.title,
                        artist:obj.author,
                        pic:obj.musicImgSrc,
                    });
                });
                this.isShow = true;
            }).catch(res => {
                console.log('获取请求失败')
            });

        
        }




        
    }
</script>

<style scoped>

</style>