<template>
  <div>
    <h1>Todo Application Projects</h1>
    <input
      type="text"
      name="project"
      v-model="user"
      placeholder="Enter Data here"
    />
    <button type="submit" v-on:click="addData">Add</button>

    <div class="center">
      <table border="1">
        <tr>
          <th>Nameerrr  </th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

        <tr v-for="(user, index) in users" :key="index">
          <td>
            <span :class="{ finish: user.status === 'Completed' }">
              {{ user.name }}
            </span>
          </td>
          <td>
            <span
              class="pointer"
              @click="changeStatus(index)"
              :class="{
                yellow: user.status === 'to-do',
                red: user.status === 'inprogress',
                green: user.status === 'Completed',
              }"
            >
              {{ firstLetterUpper(user.status) }}
            </span>
          </td>
          <td><button @click="editUser(index)">edit</button></td>
          <td><button @click="delRecord(index)">del</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todoapp",

  data() {
    return {
      user: "",
      editusers: null,
      avilableStatus: ["to-do", "inprogress", "Completed"],
      users: [
        { name: "Ram", status: "inprogress" },
        { name: "Saksham", status: "to-do" },
        { name: "Ramaskhsa", status: "Completed" },
      ],
    };
  },
  methods: {
    addData() {
      if (this.user.length === 0) return;

      if (this.editusers === null) {
        this.users.push({
          name: this.user,
          status: "to-do",
        });
      } else {
        this.users[this.editusers].name = this.user;
        this.editusers = null;
      }
      this.user = "";
    },
    delRecord(index) {
      this.users.splice(index, 1);
    },
    editUser(index) {
      this.user = this.users[index].name;
      this.editusers = index;
    },
    changeStatus(index) {
      let newindex = this.avilableStatus.indexOf(this.users[index].status);
      if (++newindex > 2) newindex = 0;

      //    console.log(newindex);
      //    console.log(this.avilableStatus[newindex]);

      this.users[index].status = this.avilableStatus[newindex];
    },
    firstLetterUpper(char) {
      return char.charAt(0).toUpperCase() + char.slice(1);
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}
table {
  border-collapse: collapse;
  margin-top: 20px;
}
table tr td {
  padding: 5px 15px;
}
.pointer {
  cursor: pointer;
}
.finish {
  text-decoration: line-through;
}
.yellow {
  color: yellow;
  font-weight: bold;
}
.red {
  color: red;
  font-weight: bold;
}
.green {
  color: green;
  font-weight: bold;
}
</style>