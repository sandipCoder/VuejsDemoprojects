import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import covidinfo from "@/module/covidinfo";
import weatherinfo from "@/module/weatherinfo";
import todomodule from "@/module/todomodule";
import restaurant from "@/module/todomodule";

Vue.use(Vuex,axios);

export default new Vuex.Store({
  modules:{
    covidinfo,
    weatherinfo,
    todomodule,
    restaurant
  },
});
