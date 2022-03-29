<template>
<div>
    <h2>{{ showmsg }}</h2>

    <button v-on:click="hello"> Click Hello </button>

    <h1 v-if="show">conditional statement if true to show...</h1>
    <h1 v-else>conditional statement if false to show... {{showmsg}} </h1>

    <input type="text" v-model="data" @keypress.enter="demo">

    <input type="text" v-model="bdata" @keyup.enter="demo2">

    <input type="text" v-model="bdata2" @keydown="demo3">
<br><br>
    <input type="text" name="" id="" ref="txtname">
    <input type="email" name="" id="" ref="txtemail">
    <button v-on:click="butnsubmit">click</button>

</div>
</template>

<script>
export default {
    name: "Mycompo",
    props: ['showmsg'],
    data() {
        return {
            show: true,
            data: '',
            bdata: '',
            bdata2: ''
        }
    },
    methods: {
        hello() {
            console.log("Hello this is the first event to work.....");
            this.show = !this.show;

        },
        demo() {
            console.log("keypres", this.data)
        },

        demo2() {
            console.log("keyup", this.bdata)
        },
        demo3() {
            console.log("keydown", this.bdata2)
        },
        butnsubmit(){
          console.log(this.$refs)
          console.log(this.$refs.txtname.value)
          console.log(this.$refs.txtemail.value)
        }
    },
};
</script>
