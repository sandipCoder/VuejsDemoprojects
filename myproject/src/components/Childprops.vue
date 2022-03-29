<template>
    <div>
        
        <ul v-for="student in students" :key="student.id">
            <li>ID:{{student.id}} - NAME:{{student.name}} - AGE:{{student.age}}</li>
        </ul> 
    </div>
</template>

<script>
export default {
    name: "Childprops",
    props: ['students']
}
</script>
