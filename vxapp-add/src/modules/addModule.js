export default {
    state: {
        todos: [
            {
                id:1,
                name:"Sandip",
                completed:false
            },
            {
                id:2,
                name:"Ram",
                completed:false
            },
            {
                id:3,
                name:"Shyam",
                completed:false
            }
        ]
    },

    getters: {
        getdata(state) {
            return state.todos.length
        },

        getRecord(state) {
            return state.todos
        },

        doneTodos: state => {
			return state.todos.filter(todo => todo.completed);
		},
		doneTodosCount: (state, getters) => {
			return getters.doneTodos.length;
		},


        activeTodos: state => {
			return state.todos.filter(todo => !todo.completed);
		},
		activeTodosCount: (state, getters) => {
			return getters.activeTodos.length;
		}
    },

    actions: {
        addData({ commit }, todo) {
            commit('addRecord', todo)
        },
        deleData({ commit }, todo) {
            commit('deleteRecord', todo)
        },
        editData({ commit }, item) {
            commit('editRecord', item)
        },
        chekComplted({ commit }, todo) { 
            commit('changeCmplete', todo)
        }

    },
    mutations: {
        addRecord(state, todo) {
            console.log(todo)
            state.todos.push(todo)
            console.log(state.todos)
        },

        deleteRecord(state, todo) {

            console.log(todo)
            let findindex = state.todos.findIndex(todoitems => todoitems.id === todo)

            if (findindex > -1) {
                state.todos.splice(findindex, 1)
            }
        },

        editRecord(state,item) {                    
            let findindex = state.todos.findIndex(todoitems => todoitems.id === item.id)            
            if (findindex > -1) {
                state.todos[findindex] = item
            }
        },

        changeCmplete(state, todo){
			todo.completed = !todo.completed;
            state.todos.completed = state.todos.completed === false ? true : false;
        }


    }

}

