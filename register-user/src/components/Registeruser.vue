<template>
<div>
    <div class="container">
        <div class="row justify-content-center register">
            <div class="col-sm-12 col-md-8 col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Register user</h4>
                    </div>

                    <div class="card-body">
                        <form novalidate @submit.prevent="registerUser">
                            <div class="form-group">
                                <label for="exampleInputUser">User Name</label>
                                <input type="text" :class="`form-control ${
                      errors.username ? 'is-invalid' : ''
                    }`" id="exampleInputUser" aria-describedby="userHelp" placeholder="Enter username" v-model="username" />
                                <div class="invalid-feedback">{{ errors.username }}</div>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Email Address</label>
                                <input type="email" :class="`form-control ${errors.email ? 'is-invalid' : ''}`" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" />
                                <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" :class="`form-control ${
                      errors.password ? 'is-invalid' : ''
                    }`" id="exampleInputPassword1" placeholder="Password" v-model="password" />
                                <div class="invalid-feedback">{{ errors.password }}</div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputConformpassword">Confirm Password</label>
                                <input type="password" :class="`form-control ${
                      errors.cpassword ? 'is-invalid' : ''
                    }`" id="exampleInputConformpassword" placeholder="Confirm password" v-model="cpassword" />
                                <div class="invalid-feedback">{{ errors.cpassword }}</div>
                            </div>
                            <button type="submit" class="btn btn-primary form-control">
                                Registeruser
                            </button>
                        </form>
                    </div>
                </div>

                <div class="loader" v-if="loading">
                    <img src="../assets/loader.gif" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import validationregisteruser from "../validation/validationregisteruser";
export default {
    name: "Registeruser",

    data() {
        return {
            username: "",
            email: "",
            password: "",
            cpassword: "",
            errors: {},
            users: [],
            loading: false,

        };
    },

    methods: {
        registerUser() {
            this.loading = true;
            let user = {
                username: this.username,
                email: this.email,
                password: this.password,
                cpassword: this.cpassword,
            };

            const {
                isInvalid,
                errors
            } = validationregisteruser(user);

            if (isInvalid) {
                this.errors = errors;
            } else {
                this.errors = {};

                if (localStorage.users) {
                    let lstuser = localStorage.users;
                    this.users = JSON.parse(lstuser);
                }

                this.users.push(user);
                localStorage.setItem("users", JSON.stringify(this.users));
                this.username = "";
                this.email = "";
                this.password = "";
                this.cpassword = "";
                setTimeout(() => {
                    this.loading = false;
                    this.$router.push("/Login");
                }, 5000);
            }
        },
    },
};
</script>

<style scoped>
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* .loader {
  transform: translate(-50%, -50%);
  border: 10px solid #f3f3f3;

  border-top: 8px solid #3498db;

  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
} */
</style>
