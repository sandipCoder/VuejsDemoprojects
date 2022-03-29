<template>
<div>
    <div class="container">
        <div class="row justify-content-center centerdiv">
            <div class="jumbotron">
                <h1 class="display-4">{{ user.username }} login Successfully</h1>
                <hr class="my-4" />
                <div v-if="user.username === 'admin'">
                    <h5>List of users</h5>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in users" :key="item.username">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.username }}</td>
                                <td>{{ item.email }}</td>
                                <td>
                                    <button class="btn btn-primary" type="button" @click="deletItem(index)">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="user.username != 'admin'">
                    <p class="lead">
                        This is a simple hero unit, a simple jumbotron-style component for
                        calling extra attention to featured content or information.
                    </p>
                </div>
                <hr class="my-4" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import _ from "lodash";
export default {
    name: "Dashboard",
    data() {
        return {
            user: "",
            users: [],
        };
    },
    mounted() {
        if (localStorage.activeUser) {
            let lsuser = localStorage.users;
            this.users = JSON.parse(lsuser);
            let activeUser = localStorage.activeUser;
            this.user = JSON.parse(activeUser);
        }
    },
    methods: {
        deletItem(item) {
            let lsuser = localStorage.users;
            lsuser = JSON.parse(lsuser);

            var findeInexdata = lsuser.findIndex(function (o) {
                return o.username === lsuser[item].username;
            })
            console.log(findeInexdata);

            if (findeInexdata > -1) {
               let dfasdf = _.without(lsuser, findeInexdata)
                console.log(lsuser);

                localStorage.removeItem(dfasdf);
            }
            //console.log(findeInds);

            // this.users = _.without(this.users, index);
            // console.log("del", _.without(this.users, index))

        },
    },
};
</script>

<style>
.centerdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
