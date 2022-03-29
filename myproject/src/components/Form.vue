<template>
  <div :class="['mtop']">
    <h1>Sign Up From</h1>
    <input
      type="text"
      placeholder="Enter user name"
      v-model="signup.username"
    />
    <br /><br />
    <input
      type="password"
      name=""
      id=""
      placeholder="Enter password"
      v-model="signup.password"
    />
    <p>Select Hobbies</p>
    <input
      type="checkbox"
      value="cricket"
      id="cricket"
      v-model="signup.hobbies"
    />
    <label for="cricket">Cricket</label>

    <input
      type="checkbox"
      value="football"
      id="football"
      v-model="signup.hobbies"
    />
    <label for="football">Cricket</label>

    <p>Gender</p>
    <input
      type="radio"
      name=""
      value="male"
      id="male"
      v-model="signup.gender"
    />
    <label for="male">male</label>

    <input
      type="radio"
      name=""
      value="female"
      id="female"
      v-model="signup.gender"
    />
    <label for="female">female</label>

    <div v-bind:style="{ margin: top }">
      <button v-on:click="submitForm">Submit</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      top: "20px",

      signup: {
        username: null,
        password: null,
        hobbies: [],
        gender: null,
      },
    };
  },
  methods: {
    submitForm() {
      console.log("form Data user",this.signup);
    },
  },
};
</script>
<style scoped>
.mtop {
  margin-top: 40px;
}
.margintop {
  margin-top: 20px;
}
</style>