<template>
<div>
    <h1> todo application</h1>
    <Comp2 @add="addUSer" />
    <Comp1 />
    <Comp3 :userDataArr="userDataArrrrr" @dele="delteList" @editdata="editList" :remain="remaining" :anyremain="anyrmain" @checkFun="checkFunction" @filteritem="changeFiter" />
</div>
</template>

<script>
import Comp1 from './Comp1.vue'
import Comp2 from './Comp2.vue'
import Comp3 from './Comp3.vue'

export default {
    name: "Todo-5-sept",
    data() {
        return {
            userData: [],
            name: '',
            indexno: 0,
            filter: "all"
        }
    },

    components: {
        Comp2,
        Comp1,
        Comp3
    },

    computed: {
        remaining() {
            return this.userData.filter(user => !user.completed)
        },
        anyrmain() {
            return this.remaining !== 0
        },
        userDataArrrrr() {
            if (this.filter == "all"){
                return this.userData;
            } else if (this.filter== "active") {
                return this.userData.filter(user => !user.completed);
            } else if (this.filter == "completed") {
                return this.userData.filter(user => user.completed)
            }
            return this.userData,
            console.log(this.userData)
        }

    },

    methods: {
        addUSer(val) {
            console.log(val, "dfsdfsd")
            if (val.trim().length !== 0) {
                this.userData.push({
                    name: val,
                    id: this.indexno++,
                    editing: false,
                    completed: false,
                   
                    

                });
            } else {
                console.log("errrorr")
            }

            console.log(this.userData)

        },
        delteList(id) {

            const index = this.userData.findIndex((list) => list.id === id)
            this.userData.splice(index, 1)

        },

        editList(val) {
            console.log("actural val", val)
            this.name = val;

        },
        checkFunction(e) {

            this.userData.forEach((user) => {
                console.log(user.completed = e)
            })
        },

        changeFiter(val) {
           console.log(val)
        }
    }
}
</script>

<style scoped>
.active {
    background-color: green
}
</style>
