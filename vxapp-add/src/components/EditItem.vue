<template>
<div class="listItem">
    <div class="listItem">
        <input type="checkbox" v-model="doneTodo">
        <span v-if="!editing" :class="{ done: item.completed }"> {{ item.name }}  </span>
        <span v-else>
            <input type="text" v-model="item.name" class="input" @change="todoTextChange">
        </span>
    </div>
    <div>
        <button @click="editDataITem(item)"> {{ editing ? "Update" : "Edit" }}</button>
        <button @click="deleData(item.id)">X</button>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";

export default {
    name: "Edititem",
    props: ['item'],

    data() {
        return {
            todoITem: "",
            editing: false,
            doneTodo: this.item.completed,
        };
    },
    methods: {
        ...mapActions(["deleData", "editData", "chekComplted"]),

        todoTextChange(e) {
            this.todoITem = e.target.value;
        },

        editDataITem(item) {
            console.log(item.name);
            this.editing = this.editing === false ? true : false;
            if (this.editing) {
                this.editData(item);
            }
        },

    },

}
</script>

<style scoped>
.listItem {
    display: flex;
    justify-content: space-between;
}
.done{
    text-decoration: line-through;
}
</style>
