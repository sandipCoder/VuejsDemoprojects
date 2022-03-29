<template>
<div class="hello">
    <h1>Students Total - {{studentsCount}}</h1> 

    <div v-for="(student,index) in students" :key="student.id" class="studentrec">
        <span class="dd">
            <i> {{student.name}} |</i>
            <i> {{student.games.length}} Games plays </i>
        </span> |
        <span class="dd">
            <button @click="getTeamMembers({type:'A',index})" :disabled="student.selected">Team A</button>
            <button @click="getTeamMembers({type:'B',index})" :disabled="student.selected">Team B</button>
        </span>
    </div>

    <hr>

    <TeamComp type="A"> Team A </TeamComp>
    <TeamComp type="B"> Team B </TeamComp>
    <MatchFix/>

</div>
</template>

<script>
import TeamComp from '@/components/TeamComp.vue';
import {mapState,mapActions, mapGetters} from 'vuex'
import MatchFix from '@/components/MatchFix.vue';

export default {
    name: 'StudentData',
    components:{TeamComp,MatchFix},

    computed: { 
        ...mapState(['students']),
        ...mapGetters(['studentsCount'])
    },

    created() {
        this.$store.dispatch('getStudents')
    },

    methods:{
      ...mapActions(['getTeamMembers'])
      // addTeam(type,index){
      //  // console.log('add team A',id,index)
      //   this.$store.dispatch('getTeamMembers',{type,index})       
      // }, 
      },
    

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.studentrec {
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    margin: 0 auto;
}

.dd {
    margin: 10px 10px
}
</style>
