import Vue from 'vue';
import Vuex from 'vuex';
import carts from '../modules/carts';
import productsModule from '../modules/productsModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
     products:productsModule,
     carts:carts
    },

    state:{
        message:"Project Using Vuex...",
         users:[
         {id:1,name:"sandip",age:"32"},
         {id:2,name:"Nikita",age:"27"},
         {id:3,name:"Saksham",age:"1"}
        ]
    },

    getters:{
        getUsers(state){
                return state.users;
        }
    },

    actions:{
        updateState(context){
            context.commit('chageState')

        }
    },

    mutations:{
        chageState(state){
            state.message = "Update the message using vuex"
        }
    },

})