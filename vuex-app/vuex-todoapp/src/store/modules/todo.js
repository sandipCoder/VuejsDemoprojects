import axios from "axios";



const state = {
    todos: [
       
    ]

}

const getters = {
    allTodo: (state) => {
        return state.todos;
    }
}

const actions = {

    async fetchTodo({ commit }) {
        const respose = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        console.log(respose.data);
        commit('setTodo', respose.data)
    },
    async deleteITem({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('deleteItem', id)
    },

    async updateITem({ commit }, updateItodo) {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${updateItodo.id}`, updateItodo)
        commit('updateItem', updateItodo)
    },
    async addTodoitem({ commit }, todo) {
        const respose = await axios.post(`https://jsonplaceholder.typicode.com/todos`,
            { title: todo.title, completed: false })
        commit('addTodoitem', respose.data)
    },
    async filterTodos({ commit }, events) {
        const limit = Number(events.target.options[events.target.options.selectedIndex].innerText);
        // Request
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

        commit('setTodos', response.data);
    }

}

const mutations = {
    setTodo: (state, todo) => { state.todos = todo },
    deleteItem: (state, id) => { state.todos = state.todos.filter((todo) => todo.id !== id) },
    updateItem: (state, updateItodo) => {
        const index = state.todos.findIndex(todo => todo.id === updateItodo.id)
        console.log(index)
        if (index !== -1) {
            state.todos.splice(index, 1, updateItodo)

        }
    },

    addTodoitem: (state, todo) => state.todos.unshift(todo),
    setTodos:(state, todo) => state.todos = todo
}

export default {
    state,
    getters,
    actions,
    mutations,
}