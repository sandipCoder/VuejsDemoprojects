<template>
    <div>
        <h1>Productdetail page</h1>
       <span>{{msg}}</span>
       <span>{{$route.params.name}}</span>

    </div>
</template>
<script>
export default {
    name: "Productdetail",
    data(){
        return{
              msg:"hello i am "
        }
      
    }
}
</script>