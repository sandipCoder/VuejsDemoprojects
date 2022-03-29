<template>
  <div>
      <h2>Team {{type}}</h2>
      <ul>
          <li v-for="(member,index) in team" :key="member.id">{{member.name}} <button @click="deleteMember({type,index,member})">X</button></li>
      </ul>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name:"TeamComp",
    props:['type'],

    computed:{
        team(){
            return this.type === 'A' ? this.$store.state.teamA : this.$store.state.teamB 
        }
    },
    methods:{
        ...mapActions(['deleteMember'])
        // deleMember(type,index,member){
        //  this.$store.dispatch('deleteMember',{type,index,member});
        //   console.log("delete",type,index,member)
        // }
    }

}
</script>

<style>

</style>