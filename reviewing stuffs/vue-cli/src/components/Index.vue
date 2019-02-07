<template>
    <div>
        <h1>这是我的首页</h1>
        <!-- 调用state中对象 -->
        <!-- 1.通过计算属性直接赋值 -->
        <!-- 2.通过mapstate对象来赋值 -->
        <!-- 3.通过mapstate数组来赋值 -->




        <!-- 这里是通过计算属性中配置count方法来取到store中的count值，和下面直接调用store是一样的，但是更简略 -->
        <!-- 如果页面中有多次需要调用某个store值时可以放在计算属性中 -->
        <h1>计算属性:{{count}}</h1>

        <h3>直接赋值：{{$store.state.count}}</h3>

        <h1><span>通过mapstate数组来赋值:</span>{{count}}  {{num}}</h1>

        <button @click="$store.commit('add')">++</button>

        <!-- 这里可以不传参也就是没有括号，但是如果要传参的话不要再写state -->
        <button @click='add1(2)'>用mapMutations的++</button>

        <h1><span>getter:</span>{{count1}}</h1>

        <button @click='addAction(10)'>mapAction++</button>
    </div>
</template>


<script>


    // 在方法methods中调用store,el等要加$，而同理上面显示值也要加$


    import store from '@/vuex/store'

    // 注意：这里为什么要用{mapState}花括号？是因为用解构直接调用vuex下某个对象的属性，vuex下有很多对象，不加花括号是调用对象
    // 同样mapMutations是取出vuex中属性
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        methods:{
            // 方法中取data和el要用this.$data  this.$el
            // this.$store也一样
        },
        store,
        //同样是es6简写
        

        // 1.用计算属性
        // computed:{
        //     count(){
        //         return this.$store.state.count
        //     }
        // }


        // 2.mapState
        // computed:mapState({
        //     count:state=>state.count
        // })


        // 3.computed
        // computed:mapState(['count','num'])

        // 如何把mapState和mapMutations合并到计算属性下？
        computed:{
            ...mapState(['count','num']),
            ...mapGetters(['count1'])
             // ...是扩展运算符，相当于把mapState(['count','num'])，mapGetters(['count1'])内部对象拿出来同一放在计算属性中
        },
           
        methods:{
            ...mapMutations(['add1']),
            ...mapActions(['addAction'])
        }
    }
</script>

<style scoped>

</style>