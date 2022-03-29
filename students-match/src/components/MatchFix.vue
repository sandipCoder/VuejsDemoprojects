<template>
<div>
    <h1>Match Fixed Date</h1>
   <div v-if='getTeamCount>2'> {{matchDate}} </div> 
</div>
</template>

<script>
import {
  mapGetters,
    mapState
} from 'vuex'
export default {
    name: 'MatchFix',

    computed: {
        ...mapState({
            matchDate: state => state.info.matchDate
        }),
        ...mapGetters(['getTeamCount'])
    }

}
</script>

<style>

</style>
