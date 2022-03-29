<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <h4>Store Data: {{ msgstore }}</h4>
    <button @click="UpdateMessge">Update Message</button>

    <p>Counter:{{ count }}</p>

    <button @click="counter">Update Count</button>
    <br /><br />
    <form action="" @submit.prevent="addData">
        <input type="text" v-model="user" placeholder="enter user" />
        <button>Add user</button>
    </form>

    <h4>User List</h4>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in getUsers" :key="index">
                            <td scope="row">{{ user.id }}</td>
                            <td>
                                <span v-if="!editrecord">
                                    {{ user.name }}
                                </span>
                                <input type="text" v-bind:value="user" @change="userCahnge" v-else class="form-control" />
                            </td>

                            <td>
                                <button class="btn btn-primary mx-2" @click="delData(user.id)">
                                    Delete user
                                </button>
                                <button class="btn btn-danger" @click="editUser(getUsers, index)">
                                    {{ editrecord ? "Update" : "Edit" }}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapActions
} from "vuex";
import {
    v4
} from "uuid";
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },

    //using without helper methods

    // computed: {
    //     message() {
    //         return this.$store.state.msg;
    //     },
    //     getUsers() {
    //         return this.$store.getters.getUsers
    //     },
    //     updataCount(){
    //       return this.$store.state.count;
    //     }
    // },

    //using helper methods

    data() {
        return {
            user: "",
            userarr: {},
            editrecord: false,
        };
    },

    computed: {
        ...mapState(["msgstore", "count"]),
        ...mapGetters(["getUsers"]),
    },
    methods: {
        UpdateMessge() {
            this.$store.dispatch("updateMessage");
        },
        counter() {
            this.$store.dispatch("updataCount");
        },

        ...mapActions(["addRecords", "deleteRecords","updateRecords"]),

        addData() {
            this.addRecords({
                id: v4(),
                name: this.user,
            });
            this.user = "";
        },
        delData(id) {
            this.deleteRecords(id);
        },
        userCahnge(e) {
            this.user = e.target.value;
            console.log(this.user);
        },

        editUser(userarr, index) {
            console.log(userarr[index].name);

            this.editrecord = this.editrecord == true ? false : true;

            if (this.editrecord) {
                this.user = userarr[index].name;
                this.updateRecords(userarr);
            }
            else{
              userarr[index].name = this.user;
            }
        },
    },
};
</script>
