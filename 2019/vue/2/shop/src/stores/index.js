import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'

Vue.use(Vuex)

let store = new Vuex.Store({
    state,
    getters:{},
    mutations: {
        UPDATE_USER:(state, data)=>{
            // window.sessionStorage.setItem('user',JSON.stringify(data)),
            state.user = Object.assign({
                ...state.user
            },data)
        },
        GET_USER:(state,data)=>{
            state.user = data;
            // window.sessionStorage.setItem('user',data)
        },
        ADD_CART: (state, data) => {
            state.user.cart.push(data);
            // console.log(state.user);
            // window.sessionStorage.setItem('user', JSON.stringify(state.user))
        },
    },
    actions: {
       
    }
})



export default store