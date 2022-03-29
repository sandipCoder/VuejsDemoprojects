<template>
    <div>
           <h2 v-once>Parent : {{name}}</h2>
            <h2> Child :{{name}}</h2>
           <p>{{ok?"yes":"No"}}</p>
            <div v-html="rowHtml"></div>

           <button v-bind:disabled="disablebtn" v-on:click="chageText">Change Name</button>

    </div>
</template>

<script>
export default {
    name:'Action',

    data(){
           return{
              name:"Sandip Choraghe",
              ok:true,
              rowHtml : '<h3> html use for html tag </h3>',
              disablebtn: false
           }
    },methods:{
        chageText(){
            this.name="Saksham Choraghe";
            this.ok=!this.ok;
            this.disablebtn=true;

        }
    }
}
</script>