<template>
<div>
    <p>List View</p>
    <div class="list">
        <ul>
            <li v-for="user in userDataArr" :key="user.id">
                <input type="checkbox" v-model="user.completed">
                <span v-if="!user.editing" @dblclick="userEdit(user)" class="view" :class="{completed :user.completed}">
                    {{ user.name }}</span>
                <input v-else type="text" class="edit" @blur="focused = false" v-model="user.name" />
                <button @click="$emit('dele', user)">Del</button>
                <button @click="edit(user)">edit</button>
            </li>
            <hr>
            <li><span><input :checked="!anyremain" type="checkbox" @change="$emit('checkFun', $event.target.checked)">ALL</span> <span> remain for check == {{remain.length}}</span></li>
            <hr />

            <div class="devider">
            <button class="btn btn-sm btn-outline-primary" :class="{active : filter == 'all' }"       @click="$emit('filteritem', 'all')">All</button>
            <button class="btn btn-sm btn-outline-primary" :class="{active : filter == 'active' }"   @click="$emit('filteritem', 'active')">Active</button>
            <button class="btn btn-sm btn-outline-primary" :class="{active : filter == 'completed' }" @click="$emit('filteritem', 'completed')">Completed</button>
        </div>

        </ul>
        
    </div>
</div>
</template>

<script>
import {
    focus
} from "vue-focus";
export default {
    directives: {
        focus: focus,
    },

    name: "Comp3",
    props: ["userDataArr", 'remain', 'anyremain'],
    data() {
        return {
            name: "",
            edituser: null,
            focused: false,
           filter:'all'
           

        };
    },

    methods: {
        userEdit(user) {
            this.edituser = user;
            user.editing = true;
        },
        edit(user) {
            this.$emit("editdata", user);
            this.edituser = null;
            user.editing = false;
        },

    },
};
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}

.active {
    background-color: green
}
</style>
