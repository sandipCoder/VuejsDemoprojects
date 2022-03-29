<template>
<div class="list">
    <ul>
        <li class="todoitem" v-for="item in todos" :key="item.id">
            <input type="checkbox" v-model="item.isDone" @click="chekEvent($event)" />
            <span class="itemdata" :class="[item.isDone === true ? 'textDecoration' : '']">
                {{ item.todo }}</span>
            <span>
                <button @click="$emit('editItem',item.id)">Edit</button>
                <button @click="delItem(item.id)">Delete</button>
            </span>
        </li>
    </ul>
    <hr />
    <div class="details">
        <span>All:{{ todos.length }}</span>
        <span>Todo:{{ todos.length - checkedStatus.length }}</span>
        <span>Completed:{{ checkedStatus.length }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: "Todolist",
    props:['todos'],
    data(){
        return{
             checkedStatus:[]
        }
    },

    methods: {
         chekEvent(e){
            console.log(e.target.checked)
           if(e.target.checked === true){
              this.checkedStatus.push(e.target.checked)
           }
           console.log( this.checkedStatus)
        },
        delItem(id) {
            let indeData = this.todos.findIndex(item => item.id === id);
            this.todos.splice(indeData, 1)
            localStorage.setItem("Todos", JSON.stringify(this.todos))
        },


    }
};
</script>
