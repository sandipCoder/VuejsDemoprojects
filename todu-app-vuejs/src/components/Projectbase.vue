<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <Adddata @addApt="addPetApt" />
        <SearchApt
          @searchFilter="searchEle"
          @keyRequest="keySearch"
          @keyDir="keyOrder"
          :myKey="filterkey"
          :myOrder="filterorder"
        />
        <TodoApp
          :appointments="filterlists"
          @removeList="removeList"
          @editApt="editpetItemApt"
        />
        <TodoappSimple/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Adddata from "./Adddata.vue";
import TodoApp from "./TodoApp.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import SearchApt from "./SearchApt.vue";
import _ from "lodash";
import TodoappSimple from './TodoappSimple.vue';
Vue.use(VueAxios, axios);

export default {
  name: "App",
  data() {
    return {
      appointments: [],
      aptindex: 0,
      searchAptmnt: "",
      filterkey: "petOwner",
      filterorder: "asc",
    };
  },
  components: {
    TodoApp,
    Adddata,
    SearchApt,
    TodoappSimple,

  },

  mounted() {
    axios.get("./data/apt.json").then((response) => {
      console.log("apt", (this.appointments = response.data));
      this.appointments = response.data.map((aptID) => {
        aptID.aptmtid = this.aptindex;
        this.aptindex++;
        return aptID;
      });
    });

  },

  computed: {
    serchApts: function () {
      return this.appointments.filter((item) => {
        return (
          _.lowerCase(item.petName).match(_.lowerCase(this.searchAptmnt)) ||
          _.lowerCase(item.petOwner).match(_.lowerCase(this.searchAptmnt)) ||
          _.lowerCase(item.petNotes).match(_.lowerCase(this.searchAptmnt))
        );
      });
    },

    filterlists: function () {
      // return this.serchApts.slice().sort(function(a, b) {
      //   return a.petname < b.petname ? 1 : -1;
      // });
      return _.orderBy(
        this.serchApts,
        (items) => {
          return _.lowerCase(items[this.filterkey]);
        },
        this.filterorder
      );
    },
  },
    created() {
    this.appointments = JSON.parse(localStorage.getItem("Appointments")||'[]');
  },

  methods: {
    addPetApt(aptitems) {
      console.log("Record Added");
      console.log(this.aptindex);
      aptitems.aptmtid = this.aptindex;
      this.aptindex++;
      this.appointments.push(aptitems);

      localStorage.setItem("Appointments", JSON.stringify(this.appointments));
    },

    removeList(aptItems) {
      const index = this.appointments.findIndex(
        (item) => item.aptmtid == aptItems.aptmtid
      );
      this.appointments.splice(index, 1);
      localStorage.setItem("Appointments", JSON.stringify(this.appointments));
    },
    editpetItemApt(id, name, text) {
      const index = this.appointments.findIndex(
        (itenid) => itenid.aptmtid == id
      );
      //console.log(this.appointments[index][name])
      this.appointments[index][name] = text;
    },
    searchEle(serchApt) {
      console.log(serchApt);
      this.searchAptmnt = serchApt;
    },
    keySearch(key) {
      this.filterkey = key;
    },
    keyOrder(key) {
      this.filterorder = key;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
