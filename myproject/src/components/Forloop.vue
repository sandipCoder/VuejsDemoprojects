<template>
<div>
  <table border="1">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Position</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.pos }}</td>
    </tr>
  </table>
  <ul>
    <li v-for="ar in arr" :key="ar">{{ar}}</li>
  </ul>

  </div>
</template>

<script>
export default {
  name: "Forloop",
  props: {},
  data() {
    return {
      users: [
        { id: 1, name: "Sandip", pos: "UI developer" },
        { id: 2, name: "Ram", pos: "SW developer" },
        { id: 3, name: "Vijay", pos: "PITHON developer" },
        { id: 4, name: "Ajay", pos: "WEB developer" },
      ],
      arr:['sandip','ram','shyam','ganesh']
    };
  },
};
</script>