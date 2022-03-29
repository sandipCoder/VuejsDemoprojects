export default {
    state: {

        todos: JSON.parse(localStorage.getItem('todo')) || [],
        completedStatus: []

    },
    getters: {
        getAllTodos(state) {
            return state.todos;
        },

        getCompletedStatus(state) {
            return state.completedStatus;
        }

    },
    actions: {
        addTodos({ commit }, todo) {
            commit('addTodosData', todo)

        },
        deleteTodos({ commit }, todoid) {
            commit('deleteTodosData', todoid)
        },

        updateTodos({ commit }, editing) {
            commit('updateTodosData', editing)

        },

        completeTasks({ commit }, id) {
            commit('completeTasksTodo', id)
        }

    },

    mutations: {

        addTodosData(state, todo) {
            state.todos.push(todo);

        },
        deleteTodosData(state, todoid) {
            let indexofdata = state.todos.findIndex(item => item.id === todoid)
            console.log(indexofdata)
            state.todos.splice(indexofdata, 1)
            localStorage.setItem('todo', JSON.stringify(state.todos))
        },
        updateTodosData(state, editing) {
            state.todos[editing.editing].todo = editing.todo

        },
        completeTasksTodo(state, id) {

            let findIndex = state.todos.findIndex(item => item.id === id)
         

            if (findIndex > -1) {
                state.todos[findIndex].completed = !state.todos[findIndex].completed;
                

                if (state.todos[findIndex].completed === true) {
                    
                    state.completedStatus.push(state.todos[findIndex].completed);                  

                } else {
                    state.completedStatus.pop(state.todos[findIndex].todo);
                }
               
            }



        }


    }
}