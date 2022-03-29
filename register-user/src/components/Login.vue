<template>
<div>
    <div class="container">
        <div class="row justify-content-center login">
            <div class="col-sm-12 col-md-8 col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Login</h4>
                    </div>
                    <div class="card-body">
                        <form novalidate @submit.prevent="loginuser">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email Address</label>
                                <input type="email" :class="`form-control ${errors.email ? 'is-invalid' : ''}`" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" />
                                <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" :class="`form-control ${
                      errors.password ? 'is-invalid' : ''
                    }`" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" />
                                <div class="invalid-feedback">{{ errors.password }}</div>
                            </div>
                            <button type="submit" class="btn btn-primary form-control">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
                <div v-if="loading"><img src="../assets/loader.gif" alt=""></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import validationLogin from "../validation/validationLogin";
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            errors: {},
            users: [],
            loading: false,
        };
    },
    methods: {
        loginuser() {
            this.loading = true;
            let loginCredentials = {
                email: this.email,
                password: this.password,
            };
            const {
                isInvalid,
                errors
            } = validationLogin(loginCredentials);

            if (isInvalid) {
                this.errors = errors;
            } else {
                this.errors = {};

                let lsuser = localStorage.users;
                lsuser = JSON.parse(lsuser);

                let emailIndex = lsuser.findIndex(user => user.email === loginCredentials.email)

                if (emailIndex > -1) {

                    let passwordIndex = lsuser.findIndex(user => user.password === loginCredentials.password)

                    if (passwordIndex > -1) {

                        let activeUser = lsuser.find(user => user.email === loginCredentials.email)
                        localStorage.setItem('activeUser', JSON.stringify(activeUser))

                        setTimeout(() => {
                            this.loading = false;
                            this.$router.push('/dashboard');
                            window.location.reload();
                        }, 5000);

                    } else {

                        this.errors.password = "Password does not match..."
                    }

                } else {

                    this.errors.email = 'Email dont exits in data...';
                }

            }
        },
    },
};
</script>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
