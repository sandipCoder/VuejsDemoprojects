<template>
<div>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <h3 class="text-center">Add Data here</h3>
            <div class="col-md-5 card p-3 my-3">
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Title</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="title" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Body</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" v-model="body" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    name: "Addproduct",

    data() {
        return {
            userId: 1,
            title: "",
            body: "",
        };
    },
    methods: {
        ...mapActions(["addProducts"]),

        submitForm() {
            this.addProducts({
                userId: this.userId,
                title: this.title,
                body: this.body,
            });
        },
    },
};
</script>
