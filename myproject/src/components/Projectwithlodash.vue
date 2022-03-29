<template>
  <div>
    <h1>Project with loadah...</h1>
    <Addlist @add="addDatalist" />
    <Searchdata
      @searchFilter="serchingContent"
      :myKey="filterkey"
      :myOrder="fileterorder"
      @keyRequest="changeKey"
      @keyRequestDir="changeDir"
    />
    <List
      :appoinments="filterlists"
      @removeList="removeItem"
      @edit="editItem"
    />
  </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);

import List from "./List.vue";
import Addlist from "./Addlist.vue";
import Searchdata from "./Searchdata.vue";

import _ from "lodash";

export default {
  name: "Projectwithlodash",
  components: {
    List,
    Addlist,
    Searchdata,
  },

  data() {
    return {
      title: "List Of Appoinments",
      appoinments: [],
      aptindex: 0,
      serchAptment: "",
      filterkey: "petname",
      fileterorder: "desc",
    };
  },

  mounted() {
    axios.get("./data/mydata.json").then((res) => {
      console.log("appo", (this.appoinments = res.data));
      this.appoinments = res.data.map((itemid) => {
        itemid.aptid = this.aptindex;
        this.aptindex++;
        return itemid;
      });
    });
  },
  computed: {
    serchApts: function() {
      return this.appoinments.filter((item) => {
        return (
          item.petname.toLowerCase().match(this.serchAptment.toLowerCase()) ||
          item.petwoner.toLowerCase().match(this.serchAptment.toLowerCase()) ||
          item.aptnotes.toLowerCase().match(this.serchAptment.toLowerCase())
        );
      });
    },
    filterlists: function() {
      // return this.serchApts.slice().sort(function(a, b) {
      //   return a.petname < b.petname ? 1 : -1;
      // });
      return _.orderBy(
        this.serchApts,
        (items) => {
          return items[this.filterkey].toLowerCase();
        },
        this.fileterorder
      );
    },
  },
  methods: {
    changeKey(val) {
      this.filterkey = val;
    },

    changeDir(val) {
      this.fileterorder = val;
    },
    removeItem(item) {
      console.log("deleter");
      this.appoinments = _.without(this.appoinments, item);
      //this.appoinments.splice(item,1);
    },

    editItem(id, field, text) {
      const aptindex = _.findIndex(this.appoinments, {
        aptid: id,
      });
      console.log(this.appoinments[aptindex][field]);
      this.appoinments[aptindex][field] = text;
    },
    addDatalist(item) {
      console.log("Record added succesfully....");
      item.aptid = this.aptindex;
      this.aptindex++;
      this.appoinments.push(item);
    },
    serchingContent(aptsercch) {
      // alert("great its work....")
      console.log("hello++", aptsercch);
      this.serchAptment = aptsercch;
    },
  },
};
</script>
