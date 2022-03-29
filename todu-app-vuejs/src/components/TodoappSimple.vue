<template>
<div class="todo">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <h3 class="text-center">Todo Apps</h3>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" v-model="user" aria-label="Text input with dropdown button" placeholder="Add USer" />
                    <button @click="addData" class="btn btn-primary" type="button" aria-expanded="false">
                        Add User
                    </button>
                </div>
                <div class="list">
                    <p v-if="norecord" class="text-center">No Data Found...</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between" v-for="(list, index) in userdata" :key="index" :class="{
                  completed: list.completed,
                  editing: list == edituser,
                }">
                            <span @dblclick="edituserData(list)" class="view">
                                {{ list.name }}
                            </span>
                            <input type="text" class="edit" v-model="list.name" @blur="doneEdit(list)" @keyup.enter="doneEdit(list)" />
                            <button @click="delData(list.id)" class="btn-success">
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    v1
} from "uuid";
export default {
    name: "TodoappSimple",
    data() {
        return {
            user: "",
            userdata: [],
            edituser: null,
            norecord: true,
        };
    },
    created() {
        this.userdata = JSON.parse(localStorage.getItem("userdata"), "[]");
        if (this.userdata.length > 0) {
            this.norecord = false;
        } 
    },

    methods: {
        edituserData(userdata) {
            console.log("edted");
            this.edituser = userdata;
            console.log(this.edituser);
        },
        doneEdit(list) {
            if (!this.edituser) {
                return;
            }

            this.edituser = null;
            list.name = list.name.trim();

            if (!list.name) {
                this.delData(this.list);
            }

            localStorage.setItem("userdata", JSON.stringify(this.userdata));
        },
        addData() {
            if (this.user.length === 0) {
                console.log("please enter valid data");
            } else {
                this.norecord = false;
                this.userdata.push({
                    name: this.user,
                    id: v1(),
                    completed: false,
                });
            }
            this.user = "";
            console.log(this.userdata);
            localStorage.setItem("userdata", JSON.stringify(this.userdata));
        },

        delData(delid) {
            const index = this.userdata.findIndex((uid) => uid.id == delid);
            this.userdata.splice(index, 1);
            localStorage.setItem("userdata", JSON.stringify(this.userdata));

            const len =JSON.parse(localStorage.getItem("userdata")).length
            
            if(len == 0){
               this.norecord = true;
            }

        },

    },
};
</script>

<style scoped>
.edit {
    display: none;
}

.editing .edit {
    display: block;
}

.editing .view {
    display: none;
}

.edit {
    position: relative;
    margin: 0;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-sizing: border-box;
}

.new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.todo {
    margin-top: 3rem;
    border: 2px solid #ddd;
    background: #ddd;
    margin-bottom: 5rem;
    padding: 2rem;
}
</style>
