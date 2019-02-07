<template>
    <v-touch v-on:swipeleft="next()"   >
        <div class="photo" :style="{'background-image':url}" @click="hide()">
        </div>
    </v-touch>
    <!-- vue-touch
    
    https://github.com/vuejs/vue-touch/tree/next
    cnpm install vue-touch@next --save
     -->
</template>
<script>
    // 这里不发送axios请求了，试用vuex
    // 由于两个photo的vue文件都需要store组件，可以把组件放在main.js下调用,router和store是好使的，但axios不好使
    import store from '@/vuex/store'
    export default {
        store,
        data(){
            return{
                 nowIndex:this.$route.params.photoId,
                 photolist:[]
            }
        },
        created () {
           this.photolist = this.$store.state.photolist;
        },
        computed: {
            url(){
                return `url(${this.photolist[this.nowIndex].src})`;
            }
        },
        methods: {
            next(){
                this.nowIndex++;
                if(this.nowIndex == this.photolist.length ){
                    this.nowIndex = 0;
                }
            },
            hide(){
                console.log(222);
                this.$router.push('/photo/photoList');
            }
        }
    }
</script>
<style scoped>
    /* 这里注意,修改#app不会影响全局，因为这是style scoped! */
    .photo{
        position: absolute;
        left:0;
        top:1rem;
        right:0px;
        bottom:1rem;
        color: #ffffff;
        background: #000 no-repeat center center;
        background-size: contain;
    }

</style>