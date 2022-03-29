<template>
  <div>
    <h1>Fetching Data using Api Fetch and async method</h1>

    <div class="container">
      <div class="row d-flex">
        <div class="col m-2" v-for="user in userlist" v-bind:key="user.id">
          <div class="card" style="width: 18rem">
            <img :src="user.avatar" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ user.id }} {{ user.first_name }}  {{ user.last_name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted"></h6>
              <p class="card-text">
               {{ user.email }} 
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  

<script>

export default {
  name: "Apiusingfetch",

  data() {
    return {
      userlist: null,
    };
  },
  mounted() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => {
        this.userlist = data.data;
        console.log("userlist", this.userlist);
      });
  },
};
</script>