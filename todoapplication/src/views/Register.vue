<template>
<div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-5 col-md-5 ">
            <div class="card o-hidden border-0 shadow-lg my-5 p-5">
                <div class="card-body p-0">
                    <!-- Nested Row within Card Body -->
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form class="user" @submit.prevent="registerUser">
                            <div class="form-group">
                                <input type="text" v-model="username"
                                :class="`form-control form-control-user ${errors.username ? 'is-invalid' : ''}`"  placeholder="Enter Username">
                                  <div class="invalid-feedback">{{ errors.username }}</div>
                            </div>
                            <div class="form-group">
                                <input type="email" v-model="email" 
                                :class="`form-control form-control-user ${errors.email ?'is-invalid' : ''}`" placeholder="Email">
                                 <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                            <div class="form-group">
                                <input type="password" v-model="password"
                                 :class="`form-control form-control-user ${errors.password ? 'is-invalid': ''}`" placeholder="Password">
                                 <div class="invalid-feedback">{{ errors.password }}</div>
                            </div>
                            <div class="form-group">
                                <input type="password" v-model="cpassword" 
                                :class="`form-control form-control-user ${errors.cpassword ? 'is-invalid': ''}`" placeholder="Confirm Password">

                                  <div class="invalid-feedback">{{ errors.cpassword }}</div>
                            </div>
                            <button class="btn btn-primary btn-user btn-block">
                                Register Account
                            </button>

                        </form>

                    </div>
                    <hr />
                    <div class="text-center">
                        <router-link class="small" to="/">Already have an account? Login!</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import registerValidation from "../validation/registerValidation.js";
export default {
    name: "Register",

    data() {
        return {
            username: '',
            email: '',
            password: '',
            cpassword: '',
            users: [],
            user: '',
            errors: {}
        }
    },

    methods: {
        registerUser() {
            let user = {
                username: this.username,
                email: this.email,
                password: this.password,
                cpassword: this.cpassword
            }

            const {
                isInvalid,
                errors
            } = registerValidation(user)

            if (isInvalid) {
                this.errors = errors
            } else {

                this.errors = {};
                if (localStorage.user) {
                    let lstuser = localStorage.user;
                    this.users = JSON.parse(lstuser);
                }

                this.users.push(user)
                localStorage.setItem('user', JSON.stringify(this.users))
                this.$router.push("/");
                this.username = '',
                    this.email = '',
                    this.password = '',
                    this.cpassword = ''

            }

        }
    }

}
</script>

<style scoped>

</style>
