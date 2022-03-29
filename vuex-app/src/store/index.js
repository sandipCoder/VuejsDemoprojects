import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {

        msgstore: "This is state of vue..",

        count: 0,

        users: [
            {
                id:1,
                name: "John",
            }
        ]
    },


    getters: {//mostly call for showing apindata
        getUsers(state) {
            return state.users
        }
    },

    actions: { // first creating actions of methods using contex and commit
        updateMessage(contex) {
            contex.commit('updateMsg') //commit the create function use for update the state inside the mutations
        },

        updataCount(contex) {
            contex.commit('updataCounter')
        },

        addRecords(contex, user) {
            contex.commit('addRecords', user)
        },

        deleteRecords(contex, id) {
            contex.commit('deleteRecords', id)
        },
        updateRecords(contex, id) {
            contex.commit('updateRecords', id)

        }
    },
    mutations: { //after that action create mutations call without mutaition state can not update 
        updateMsg(state) {
            state.msgstore = "This is updated Text using Mutation.."
        },
        updataCounter(state) {
            state.count++
        },
        addRecords(state, user) {
            state.users.push(user)
        },
        deleteRecords(state, id) {
            state.users = state.users.filter(user => user.id != id)
        },
        updateRecords(state, id) {

            let indexx = state.users.findIndex(user => user.id == id);
            if(indexx!=-1){
                state.users[indexx] =  id;
            }
        }

    },

})

//helper methos in vue js
//1 mapGetters use for getter
//2 mapState use for state
//3 mapActions use for actions
//4 mapMutations use for mutations

export default store;