<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Vue js Traning" />
    <Mycompo showmsg="Hi Sandip!" />
    <Forloop />
    <Parent />
    <Action />
    <Stylecss />
    <Databinding />
    <Todoapp />
    <Childprops v-bind:students="students" />
    <h3>{{ title }}</h3>
    <Childtoparent v-on:changeParent="changeTitle($event)" />
    <Lifecycle />
    <Form />
    <Formvalidation />
    <Addelteedit />
    <Fillterdata />
    <Lifecyclehooks />
    <Beforemounteandmounted />
    <Beforeupdateandupdate />
    <Fetchapi />
    <Apiusingfetch />
    <Routing />
    <Projectwithlodash />
    <Datac />
    <Routeproduct/>
    <Slotparent/>
    <RandomUser/>
  </div>
</template>



<script>
import HelloWorld from "./components/HelloWorld.vue";
import Mycompo from "./components/Mycompo.vue";
import Forloop from "./components/Forloop.vue";
import Parent from "./components/Parent.vue";
import Action from "./components/Action.vue";
import Stylecss from "./components/Stylecss.vue";
import Databinding from "./components/Databinding.vue";
import Todoapp from "./components/Todoapp.vue";
import Childprops from "./components/Childprops.vue";
import Childtoparent from "./components/Childtoparent.vue";
import Lifecycle from "./components/Lifecycle.vue";
import Form from "./components/Form.vue";
import Formvalidation from "./components/Formvalidation.vue";
import Addelteedit from "./components/Addelteedit.vue";
import Fillterdata from "./components/Fillterdata.vue";
import Lifecyclehooks from "./components/Lifecyclehooks.vue";
import Beforeupdateandupdate from "./components/Beforeupdateandupdate.vue";
import Beforemounteandmounted from "./components/Beforemounteandmounted.vue";
import Fetchapi from "./components/Fetchapi.vue";
import Apiusingfetch from "./components/Apiusingfetch.vue";
import Routing from "./components/Routing.vue";
import Projectwithlodash from "./components/Projectwithlodash.vue";
import Datac from "./components/Datac.vue";
import  Routeproduct from "./components/Routeproduct.vue";
import Slotparent from './components/Slotparent.vue';
import RandomUser from './components/RandomUser.vue';

export default {
  name: "App",
  components: {
    HelloWorld,
    Mycompo,
    Forloop,
    Parent,
    Action,
    Stylecss,
    Databinding,
    Todoapp,
    Childprops,
    Childtoparent,
    Lifecycle,
    Form,
    Formvalidation,
    Addelteedit,
    Fillterdata,
    Lifecyclehooks,
    Beforemounteandmounted,
    Beforeupdateandupdate,
    Fetchapi,
    Apiusingfetch,
    Projectwithlodash,
    Datac,
    Routing,
    Routeproduct,
    Slotparent,
    RandomUser,
  },
  data() {
       return {
      students: [
        { id: 1, name: "Sandip", age: 32 },
        { id: 2, name: "Ram", age: 34 },
        { id: 3, name: "Ganesh", age: 36 },
        { id: 4, name: "Rohan", age: 37 },
      ],

      title: "Props tutorieal....",
    };
  },

  methods: {
    changeTitle(ev) {
      this.title = ev;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
