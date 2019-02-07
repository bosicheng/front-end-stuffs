import Vue from 'vue'
import Vuex from 'vuex'
// 组件之间共享数据用store.js
Vue.use(Vuex);

const state = {
    photolist : []
}

const mutations = {
    addPhoto(state,photolist){
        state.photolist = photolist;
        // console.log(photolist);
    }
}

const getters = {
    
}

const actions = {

}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})