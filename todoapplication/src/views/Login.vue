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
                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form class="user" @submit.prevent="loginUser">
                            <div class="form-group">
                                <input type="email" v-model="email" 
                                :class="`form-control form-control-user ${errors.email? 'is-invalid':''}`" 
                                id="exampleInputEmail" placeholder="Enter Email Address...">
                                <div class="invalid-feedback">{{errors.email}}</div>
                            </div>
                            <div class="form-group">
                                <input type="password" v-model="password" 
                                :class="`form-control form-control-user ${errors.password? 'is-invalid':''}`"
                                 id="exampleInputPassword" placeholder="Password">
                                <div class="invalid-feedback">{{errors.password}}</div>
                            </div>
                            <button class="btn btn-primary btn-user btn-block">
                                Login
                            </button>
                        </form>
                    </div>
                    <hr />
                    <div class="text-center">
                        <router-link class="small" to="/register">Don't have an account? Register!</router-link>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
import loginValidation from '../validation/loginValidation'
export default {
    name: "Login",

    data() {
        return {
            email: '',
            password: '',
            users: [],
            user: '',
            errors: {}
        }
    },

    mounted() {
        if (localStorage.Activeuser) {
            let lsuser = localStorage.Activeuser
            this.user = JSON.parse(lsuser)
        }
    },

    methods: {
        loginUser() {
            let loginUser = {
                email: this.email,
                password: this.password
            }

            const {
                isInvalid,
                errors
            } = loginValidation(loginUser)

            if (!isInvalid) {
                this.errors = {};
                ///access the value from localstore
                let lsuser = localStorage.getItem('user')
                lsuser = JSON.parse(lsuser)

                let emailIndex = lsuser.findIndex(item => item.email === loginUser.email)
                //console.log(emailIndex)
                if (emailIndex > -1) {
                    let passwordIndex = lsuser.findIndex(item => item.password === loginUser.password)
                    if (passwordIndex > -1) {
                        let activeUser = lsuser.find(user => user.email === loginUser.email)
                        this.users.push(activeUser)
                        this.$router.push('/home')
                        window.location.reload()
                        localStorage.setItem('Activeuser', JSON.stringify(activeUser))
                    }
                }
            } else {
                this.errors = errors
            }

        }
    }

}
</script>

<style scoped>

</style>
