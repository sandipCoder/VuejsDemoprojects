<template>
<div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-4 mt-5">
                <h2>Todo Application</h2>

                <form action="">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="todo" placeholder="Todo Here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button class="input-group-text btn-success"  :class="{dnone : display}" id="basic-addon2" @click.prevent="addTodo">
                            <!-- {{ add ? "Add" : "Update" }} --> Add
                        </button>
                        <button class="input-group-text btn-success" :class="{dnone : !display}" :disabled="updateTodoitem" id="basic-addon2" @click.prevent="updateTodo">
                            Update
                        </button>
                    </div>
                </form>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between" v-for="(item, index) in getAllTodos" :key="item.id">
                            <div @click="completeTasksTodo(item.id)" :class="{ finish: item.completed }">
                                {{item.todo}}
                            </div>
                            <div>
                                <button class="btn btn-danger btn-sm mx-2" @click="deleteTodos(item.id)">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-primary btn-sm" @click="editData(index)">
                                    <i class="far fa-edit"></i>
                                </button>
                            </div>
                        </li>
                        <hr>
                        <div class="d-flex justify-content-between px-2 bg-default py-3">
                            <span>All = {{ getAllTodos.length }}</span>
                            <span>Complete = {{ getCompletedStatus.length }}</span> 
                            <span>Todo = {{ getAllTodos.length - getCompletedStatus.length }}</span>
                        </div>
                    </ul>
                </div>
                <!-- <div>
                    <ul class="list-group list-group-flush">
                        <li v-for="(item, index) in todos" :key="item.id" class="list-group-item d-flex justify-content-between">
                            <div @click="completdTask(item.id)" :class="{ finish: item.completed }">
                                {{ item.name }}
                            </div>

                            <div>
                                <button class="btn btn-danger btn-sm mx-2"
                                 @click="deleteItem(index)" :disabled="item.completed === true ? true : false">
                                 <i class="far fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-primary btn-sm" 
                                @click="editTodo(index)" :disabled="item.completed === true ? true : false">
                                    <i class="far fa-edit"></i>
                                </button>
                            </div>
                        </li>

                       <hr>
                        <div class="d-flex justify-content-between px-2 bg-default py-3">
                            <span>All = {{ todos.length }}</span>
                            <span>Complete = {{ completedStatus.length }} </span>
                            <span>Todo = {{ todos.length - completedStatus.length }}</span>
                        </div>
                    </ul>
                </div> -->
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapState
} from 'vuex';
export default {
    name: "Todo",
    data() {
        return {
            todo: "",
            gettodos: [],
            editing: "",
            updateTodoitem:true,
            add: true,
            isDisabled: true,
            completedStatus: [],
            display:false,
        };
    },


    computed: {
        ...mapGetters(['getAllTodos','getCompletedStatus']),
        ...mapState(['todos'])
    },

    //     mounted() {
   
    //     if (localStorage.todo) {
    //         let lst = localStorage.todo;
    //         lst = JSON.parse(lst);  
    //         this.getAllTodos = lst         
    //     }
    // },


    methods: {
        ...mapActions(['addTodos', 'deleteTodos', 'updateTodos','completeTasks']),
        addTodo() {
            this.addTodos({
                todo: this.todo,
                id: Math.floor(Math.random() * 100),
                completed: false,
            })
            this.todo = ''
            this.updateTodoitem = true
            localStorage.setItem('todo', JSON.stringify(this.getAllTodos))
        },

        editData(index) {
            this.todo = this.getAllTodos[index].todo
            this.editing = index;
            this.add = false;
            this.updateTodoitem = false;
            this.display = true

        },

        updateTodo() {
            // this.getAllTodos[this.editing].todo = this.todo;
            //console.log(this.editing)
            //console.log(this.todo)
            this.updateTodos({
                todo: this.todo,
                editing: this.editing,
            })

            this.editing = "";
            this.todo = "";
             this.display = false

            // this.add = true;
        },


            completeTasksTodo(id){
                this.completeTasks(id);

              if(localStorage.todo){
                  
                  let lst  = localStorage.todo
                  lst = JSON.parse(lst)
                   let idindex = lst.findIndex(item=>item.id ===id)
                   console.log(idindex)

                   if(idindex>-1){
                       lst[idindex].completed = true;
                       localStorage.setItem('todo',JSON.stringify(this.getAllTodos))
                   }

                  
              }
                
            }

        //     addTodo() {
        //        /// console.log("hello")
        //         if (this.editing === "") {
        //             if(this.todo.length < 0){
        //                 console.log("empty")
        //             };
        //             this.todos.push({
        //                 name: this.todo,
        //                 id: Date.now(),
        //                 completed: false,
        //             });
        //             localStorage.setItem("todo", JSON.stringify(this.todos));
        //             this.todo = "";
        //         } else {
        //             this.todos[this.editing].name = this.todo;
        //             this.editing = "";
        //             this.todo = "";
        //             this.add = true;
        //         }
        //         console.log(this.todos);
        //     },

        //     deleteItem(index) {
        //         this.todos.splice(index, 1);
        //         localStorage.setItem("todo", JSON.stringify(this.todos));
        //     },

        //     completdTask(id) {
        //         console.log("complete the task");
        //         let indexfind = this.todos.findIndex((items) => items.id === id);
        //         if (indexfind > -1) {
        //             this.todos[indexfind].completed = !this.todos[indexfind].completed;
        //             if (this.todos[indexfind].completed === true) {
        //                 this.completedStatus.push(this.todos[indexfind].name);
        //             } else {
        //                 this.completedStatus.pop(this.todos[indexfind].name);
        //             }
        //             console.log(this.completedStatus);
        //         }
        //     },

        //     editTodo(index) {
        //         this.todo = this.todos[index].name;
        //         this.editing = index;
        //         this.add = false;
        //     },
        // },
    }
};
</script>

<style>
.dnone{
    display: none;
}
</style>
