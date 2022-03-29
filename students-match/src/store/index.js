import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const info = {
    state: {
        matchDate:'01/01/2022'
    },
    getters: {
            getTeamCount(state,getters,rootState){

                return (rootState.teamA.length, rootState.teamB.length)

            }
    },
    actions: {

    },
    mutations: {

    }
}

import data from '../api/data.js'
export default new Vuex.Store({
    modules:{
        info: info,
    },

    state: {
        //data 
        students: [],
        teamA: [],
        teamB: [],
    },

    getters: {
        //like computed
        studentsCount(state) {
            return state.students.length;
        }
    },
    actions: {
        //methods
        getStudents(context) {
            context.commit('getStudentRecord')
        },
        getTeamMembers(context, data) {
            context.commit('setTeamMember', data)
            context.commit('chageSelectd', data.index)
        },

        deleteMember(context, data, member) {
            context.commit('setdeleteMember', data, member)
        }
    },
    mutations: {
        //use for changing state

        getStudentRecord(state) {
            state.students = data.getStudentData()
        },

        setTeamMember(state, data) {

            if (data.type === 'A') {
                state.teamA.push(state.students[data.index])
            } else {
                state.teamB.push(state.students[data.index])
            }
        },
        chageSelectd(state, dataindex) {
            state.students[dataindex].selected = true
        },

        setdeleteMember(state, data) {
            //console.log(index)

            if (data.type === 'A') {
                state.teamA.splice(data.index, 1);
                state.students.forEach(student => {
                    student.id === data.member.id ? student.selected = false : "";
                });
            } else {
                state.teamB.splice(data.index, 1);
                state.students.forEach(student => {
                    student.id === data.member.id ? student.selected = false : "";
                });

            }
        }
    },

})