<template>
<div>
    <div class="hello" v-if="user.username === 'admin'">
        <h1>{{ user.username | capitalize }} ! {{ msg }}</h1>
        <p>
           Admin can view Email of all users         
        </p>
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in users" :key="item.username">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.username }}</td>
                        <td>{{ item.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="hello" v-if="user.username != 'admin'">
        <h1>{{ user.username | capitalize }} ! {{ msg }}</h1>
     
        <div>
        </div>
    </div>
</div>
</template>

<script>
import Filtermixin from '@/mixins/filter'
export default {
    mixins:[Filtermixin],
    name: "HelloWorld",
    props: ["msg", "user", 'users'],

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
