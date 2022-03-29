<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card text-start login-wrap">
            <div class="card-body">
              <h4 class="card-title text-white">SIGN UP</h4>
              <div class="card-text">
                <form
                  action=""
                  novalidate
                  @submit.prevent="submitForm"
                  no-script
                >
                  <div class="form-group">
                    <label for="user">User Name:</label>
                    <input
                      type="text"
                      v-model="username"
                      :class="`form-control ${
                        errors.username ? 'is-invalid' : ''
                      }`"
                      placeholder="User Name"
                      id="user"
                    />
                    <div class="invalid-feedback">{{ errors.username }}</div>
                  </div>
                  <div class="form-group">
                    <label for="email">Email address:</label>
                    <input
                      type="email"
                      v-model="email"
                      :class="`form-control ${
                        errors.email ? 'is-invalid' : ''
                      }`"
                      placeholder="Enter email"
                      id="email"
                    />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                  </div>
                  <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input
                      type="password"
                      v-model="password"
                      :class="`form-control ${
                        errors.password ? 'is-invalid' : ''
                      }`"
                      placeholder="Enter password"
                      id="pwd"
                    />
                    <div class="invalid-feedback">{{ errors.password }}</div>
                  </div>
                  <div class="form-group">
                    <label for="cpwd">Confirm Password:</label>
                    <input
                      type="password"
                      v-model="password2"
                      :class="`form-control ${
                        errors.password2 ? 'is-invalid' : ''
                      }`"
                      placeholder="Confirm password"
                      id="cpwd"
                    />
                    <div class="invalid-feedback">{{ errors.password2 }}</div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validationsForm from "../validation/validationForm";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      users: [],
    };
  },

  methods: {
    submitForm() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
        password2: this.password2,
      };
      console.log("form submited...", user);

      const { isInvalid, errors } = validationsForm(user);

      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};

        if (localStorage.users) {
          let lsusers = localStorage.users;
          this.users = JSON.parse(lsusers);
        }

        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.username = "";
        this.email = "";
        this.password = "";
        this.password2 = "";
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style scoped>
.card {
  background: none !important;
  border: 0;
}

label,
input,
button {
  width: 100%;
  color: #fff;
  display: block;
}

.card label {
  color: #aaa;
  font-size: 12px;
}

.card input,
button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}

.card button {
  background: #1161ee;
}

.card-body {
  width: 100%;
  height: 100%;

  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(0, 0, 0, 0.5);
}

.login-wrap {
  width: 100%;
  margin: auto;
  max-width: 510px;
  min-height: 600px;
  position: relative;
  background-size: cover;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.invalid-feedback {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}
</style>
