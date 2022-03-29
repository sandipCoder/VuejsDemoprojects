
const state = {
    studRecord: [],
}
const getters = {
    allstudentRecors: (state) => {
        return state.studRecord
    }
}
const actions = {
    addStudentdata: ({ commit }, student) => {
        commit('addRecord', student)
    },
    deleteStudent: ({ commit }, id) => {
        commit('deleteRecord', id)
    },
    updateStudents: ({ commit }, student) => {
        commit('updateStud', student)
    },


}

const mutations = {
    addRecord: (state, student) => {
        state.studRecord.push(student)

        console.log(state.studRecord)
    },

    deleteRecord: (state, id) => {
        state.studRecord = state.studRecord.filter(student => student.id !== id)

    },

    updateStud: (state, student) => {
        // let index = state.studRecord.indexOf((todo)=>{todo.id === student.id })
       console.log(student.title)
        let newindex = state.studRecord.indexOf(student.title);
       
        if (++newindex > 2)
             newindex = 0;
            state.studRecord.splice(newindex, 1, student)
          

        // if (index !== -1) {

        //     state.studRecord.splice(index, 1, { title: student.title })

        // }
    },



}

export default {
    state,
    getters,
    actions,
    mutations,
}