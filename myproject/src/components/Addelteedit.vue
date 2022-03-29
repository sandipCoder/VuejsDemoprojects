<template>
  <div class="container">
    <div>
      <ul>
        <li>{{ username.length === 0 ? errors : "record add sucessfully" }}</li>
      </ul>
    </div>
    <input type="text" v-model="username" placeholder="Enter Data here" />
    <button @click="addData">Add</button>

    <div class="center">
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Todo</th>
          <th>Edit</th>
          <th>Del</th>
        </tr>
        <tr v-for="(user, index) in usersArr" :key="index">
          <td>{{ user.name }}</td>
          <td>
            <span class="pointer" @click="changeStatus(index)" :class="{
                yellow:user.status === 'inprogress',
                red:user.status === 'todo',
                green:user.status === 'finished'
            }">{{
              user.status
            }}</span>
          </td>
          <td><button @click="editUser(index)">Edit</button></td>
          <td><button @click="deleteRecord(index)">Delete</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Addelteedit",

  data() {
    return {
      username: "",
      errors: "please Enter valid data..",
      editUsername: null,
      available: ["inprogress", "todo", "finished"],
      usersArr: [
        { name: "Ramesh", status: "inprogress" },
        { name: "Nikita", status: "todo" },
      ],
    };
  },
  methods: {
    addData() {
      //   console.log("add record sucessfully...");
      if (this.username.length === 0) {
        this.errors;
      } else {
        if (this.editUsername == null) {
          this.usersArr.push({
            name: this.username,
            status: "todo",
          });
        } else {
          this.usersArr[this.editUsername].name = this.username;
          this.editUsername = null;
        }
      }

      console.log(this.usersArr);
      this.username = "";
    },
    deleteRecord(index) {
      this.usersArr.splice(index, 1);
      console.log("Record delete sucessfully...");
    },
    editUser(index) {
      this.username = this.usersArr[index].name;
      //   console.log(this.username);
      this.editUsername = index;
    },
    changeStatus(index) {
      let newindex = this.available.indexOf(this.usersArr[index].status);
      if (++newindex > 2) newindex = 0;
      this.usersArr[index].status = this.available[newindex];
    },
  },
};
</script>
<style scoped>
.container {
  margin-top: 40px;
}
.center {
  margin: 0 auto;
  width: 200px;
}
.finish {
  color: green;
}
.pointer {
  cursor: pointer;
}
.yellow{color: yellow; font-weight: bold;}
.red{color: red; font-weight: bold}
.green{color: green; font-weight: bold}
</style>