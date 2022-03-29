<template>
  <div class="container gx-5">
    <h1>Employee List useing API</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Emp Name</th>
          <th scope="col">Emp Sal</th>
          <th scope="col">Emp Age</th>
        </tr>
      </thead>
      <tbody>
        <div v-if="loading" class="d-flex position-absolute">
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
        <tr v-else v-for="emp in emplist" v-bind:key="emp.id">
          <td>{{ emp.id}}</td>
          <td>{{ emp.employee_name |revresString }}</td>
          <td>{{ emp.employee_salary|zeroDot }}</td>
          <td>{{ emp.employee_age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
export default {
  name: "Fetchapi",
  data() {
    return {
      emplist: null,
      errored: false,
      loading: true,
    };
  },
  filters: {
      zeroDot(value){          
          return value.toFixed(2)
      },
      revresString(value){ 
          return value.split("").reverse().join(" ");
      }
  },
  mounted() {
    console.log("mounted is called when dom is ready..");
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        this.emplist = response.data.data;
        console.log(this.emplist);
      })
      .then((error) => {
        console.log("error", error);
        this.errored = true;
      })
      .finally(() =>
        setTimeout(() => {
          this.loading = false;
        }, 3000)
      );
  },
};
</script>