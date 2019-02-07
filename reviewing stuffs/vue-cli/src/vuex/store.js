import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 用来存值，这个state不能改！
const state={
    count:1,
    num:2
}

// 用来定义一些方法用来修改值
const mutations={
    add(state){
        state.count++
    },
    add1(state,val){
        state.count+=val
    }
}


const getters={
    count1(state){
        return state.count+state.num;
    }
}

// actions的存在意义：同样是为了修改数据，但是actions是为了异步修改数据，mutations是同步修改数据


const actions={
    addAction({commit},val){
        commit('add',val)
    }
}


// 这里注意，写在store中的东西首先要暴露出去才能被使用
export default new Vuex.Store({//里面是对象
    state,
    // 这里是es6语法，是state对象属性的简写，其实相当于state:{值为内部对象}

    mutations,
    getters,
    actions
})

// 总结：
// state是用来定义静态变量的，getters是用来定义计算属性也就是某些变量需要state中值计算出
// 而mutations和actions是对应同步和异步方法的