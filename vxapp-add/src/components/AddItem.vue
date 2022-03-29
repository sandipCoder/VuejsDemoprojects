<template>
<div>
    <input type="text" v-model="todoText" @keypress.enter="addDataItem" placeholder="Enter something" class="form-control" />
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
import {
    v1
} from 'uuid'
export default {
    name: "AddItem",

    data() {
        return {
            todoText: "",            
        }
    },

    methods: {
        ...mapActions(['addData']),
        addDataItem() {
            if (this.todoText === '') {
                console.log("please enter valid Value")
            } else {
                this.addData({
                    name: this.todoText,
                    completed:false,
                    id: v1(),
                })
            }

            this.todoText = ''

        }

    }

}
</script>

<style>
.form-control {
    width: 50%;
    font-size: 1rem;
    padding: 10px;
    border-radius: 15px;
}

.form-control:focus {
    outline: 0px;
}
</style>
