<template>
  <div>
    <h1>Formvalidation</h1>

    <div v-if="loginForms.error.length">
        <span>Please currect the errors</span>
        <ul>
            <li v-for="er in loginForms.error" :key="er.id">
                {{er}}
            </li>
        </ul>
        
    </div>
    <form @submit.prevent="loginForm">
      <input
        type="text"
        placeholder="Enter username"
        v-model="loginForms.username"
      /><br /><br />
      <input
        type="password"
        placeholder="Enter password"
        v-model="loginForms.password"
      /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Formvalidation",

  data() {
    return {
      loginForms:{
        error:[],
        username: null,
        password: null,
      },
    };
  },

  methods: {
    loginForm(  ) {
      this.loginForms.error = [];
      if (this.loginForms.username && this.loginForms.password) {
        console.log("no error");
      }
      if (!this.loginForms.username) {
        this.loginForms.error.push("Username required");
      }
      if (!this.loginForms.password) {
        this.loginForms.error.push("Password required");
      }
      console.warn("Hello:", this.loginForms.error);
   
    },
  },
};
</script>