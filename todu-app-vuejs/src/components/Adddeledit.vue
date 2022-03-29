<template>
<div>
    <h1>Add Edit Delete</h1>

    <div v-if="!isEdit">
        <input type="text" v-model="todo">
        <button @click="addData">Add</button>
    </div>
    <div v-else>
        <input type="text" v-model="todo">
        <button @click="updatetodo">Update</button>
    </div>

    <div>
        <ul>
            <li v-for="(user,index) in todos" :key="index">
                {{ user}}
                <button @click="editData(index,user)">Edit</button>
                <button @click="delData(index)">delData</button>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: "adddeledit",
    data() {
        return {
            todo: '',
            todos: [],
            isEdit: false,
            selectedIndex: null
        }
    },

    methods: {
        addData() {
            this.todos.push(this.todo)
        },
        delData(index) {
            this.todos.splice(index, 1)
        },
        editData(index, user) {
            this.todo = user
            this.selectedIndex = index
            this.isEdit = true

        },
        updatetodo() {          
            this.todos.splice(this.selectedIndex,1,this.todo)
            this.isEdit = false
        }
    }
}
</script>
