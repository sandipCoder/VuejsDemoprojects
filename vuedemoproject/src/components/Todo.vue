<template>
<div>
    <h1>Todo Applicatuion</h1>
    <form>
        <input type="text" v-model="todo" />
        <button class="btn" @click.prevent="addTodoItem" :class="{hide:!showbtn}">Add</button>
        <button class="btn" :class="{hide:showbtn}" @click.prevent="updateDta">Update</button>
    </form>
    <Todolist :todos="todos" @editItem="editItems" />
</div>
</template>

<script>
import Todolist from './Todolist.vue'
export default {
    name: "Todo",
    components: {
        Todolist,
    },

    data() {
        return {
            todo: '',
            todos: [],
            editing: '',
            showbtn: true,
            checked: false,

        }
    },

    mounted() {
        if (localStorage.Todos) {
            let lst = localStorage.Todos
            lst = JSON.parse(lst)
            this.todos = lst
        }

    },

    methods: {
        addTodoItem() {
            if (this.todo == "") return;

            this.todos.push({
                id: Math.floor(Math.random() * 1000),
                todo: this.todo,
                isDone: false
            })

            localStorage.setItem("Todos", JSON.stringify(this.todos))
            this.todo = ''
        },

        editItems(itemid) {
            let indeData = this.todos.findIndex(item => item.id === itemid);
            this.todo = this.todos[indeData].todo;
            this.editing = indeData;
            this.showbtn = false;
        },

        updateDta() {
            this.todos[this.editing].todo = this.todo;
            localStorage.setItem("Todos", JSON.stringify(this.todos))
            this.editing = ''
            this.todo = ''
            this.showbtn = true
        },

    }
}
</script>

<style scoped>

</style>
