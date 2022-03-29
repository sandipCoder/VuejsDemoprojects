<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card text-start login-wrap">
            <div class="card-body">
              <h4 class="card-title text-white">SIGN IN</h4>
              <div class="card-text">
                <form action="" novalidate @submit.prevent="loginSubmit">
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
import logingValidation from "../validation/logingValidation";

export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: "",
      errors:{},
    };
  },

  methods: {
    loginSubmit() {
      let credentials = {
        username: this.username,
        password: this.password,
      }
      
      const { isInvalid, errors } = logingValidation(credentials);

      if (isInvalid) {      
        this.errors = errors;
      } else {
        this.errors = {};

        let lsUser = localStorage.users;
        lsUser = JSON.parse(lsUser);       

        let usernameindex = lsUser.findIndex(itemuser => itemuser.username === credentials.username) 

        if (usernameindex > -1) {
        
        let passwordindex = lsUser.findIndex(itemuser => itemuser.password === credentials.password)

          if (passwordindex > -1) {
             let activeUser = lsUser.find((user)=>user.username === credentials.username)
             localStorage.setItem('Activeuser', JSON.stringify(activeUser))
             this.$router.push("/dashboard");
             window.location.reload();

          } else {
            this.errors.password = "Password does not match..";
          }

        } else {
          this.errors.username = "Username does not exits!";
        }
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
  min-height: 400px;
  position: relative;
  background-size: cover;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
