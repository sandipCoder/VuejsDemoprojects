<template>
<div class="randomuser mb-5">
    <h1 class="bg-info py-4  text-white">Random user</h1>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-7">
                <div class="card p-3 py-4">
                    <div class="text-center">
                        <img :src="picture" width="200" class="rounded-circle">
                    </div>
                    <h5 class="mt-2 mb-0">{{fname}} {{lname}}</h5>
                    <p>Email :{{email}}</p>
                    <div class="buttons">
                        <button class="btn px-4 ms-3" :class="gender" @click="getuser">Get Random USer </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "RadomUser",
    data() {
        return {
            fname: '',
            lname: '',
            email: '',
            gender: '',
            picture: '',
        }
    },
    methods: {
        async getuser() {
            const response = await axios.get('https://randomuser.me/api/')
            const data = response.data;
            this.fname = data.results[0].name.first
            this.lname = data.results[0].name.last;
            this.email = data.results[0].email
            this.gender = data.results[0].gender
            this.picture = data.results[0].picture.large
            return data;

        }
    },

    async created() {
        const data = await this.getuser()
        console.log(data)
        this.fname = data.results[0].name.first
        this.lname = data.results[0].name.last;
        this.email = data.results[0].email
        this.gender = data.results[0].gender
        this.picture = data.results[0].picture.large
    }
}
</script>

<style scoped>
.randomuser {
    margin-top: 5rem;
}

.male {
    background-color: blue;
    color: white
}

.female {
    background-color: pink;
    color: white
}
</style>>
