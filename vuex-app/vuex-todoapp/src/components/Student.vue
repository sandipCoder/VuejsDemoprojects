<template>
<div class="row justify-content-center">
    <div class="col-md-5 mt-5">

        <div class="add">
            <form>
                <input type="text" v-model="title" placeholder="Add Todo" />
                
                <input type="submit" @click.prevent="onSubmit" class="btn btn-info" value="Submit" />
                 <input type="submit"  @click.prevent="upDate" class="btn btn-success" value="Update" />                 
               
            </form>
        </div>
    

    <ul class="list-unstyled">
        <li v-for="student in allstudentRecors" :key="student.id">
            <div class="d-flex justify-content-between my-2">
                <span> {{ student.title }} </span>
                <span>

                    <button class="btn btn-success" @click="title = student.title;">
                     Edit
                    </button>
                    <button class="btn btn-danger mx-2" @click="deleteStudent(student.id)">
                        Delete
                    </button>

                </span>
            </div>
            <hr />
        </li>
    </ul>
</div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";


export default {
    name: "Student",

    data() {
        return {
            title: "",
            edited: false,
            tempdta:{},
            id:''
        };
    },
    

    computed: {
        ...mapGetters(["allstudentRecors"]),
    },

    methods: {
        ...mapActions(["deleteStudent", "updateStudents", "addStudentdata"]),

        onSubmit() {
            this.addStudentdata({
                title: this.title,
                id: this.id++,
              
              
            });
            this.title = "";
        },

        upDate(){           
            this.updateStudents({
              title: this.title,   
                id: this.id,
            })
         this.title = "";
        }
        
    },
    


};
</script>
<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}


</style>