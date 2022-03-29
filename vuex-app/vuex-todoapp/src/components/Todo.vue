<template>
<div class="hello mt-3">
    <h6>Todo App List</h6>
    <div class="todos">
        <div @dblclick="onDblclick(item)" v-for="item in allTodo" :key="item.id" class="tt" v-bind:class="{ 'none': item.id>10}">
            <div class="todo" v-bind:class="{ 'is-complete': item.completed }">
                {{ item.id }} {{ item.title }}
                <i class="fas fa-trash-alt" @click="deleteITem(item.id)"></i>
            </div>           
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    computed: {
        ...mapGetters(["allTodo"]),
    },
    methods: {
        ...mapActions(["fetchTodo", "deleteITem", "updateITem"]),

        onDblclick(item) {
            this.updateITem({
                id: item.id,
                title: item.title,
                completed: !item.completed,
            });

        },
    },
    created() {
        this.fetchTodo();
    },
};
</script>

<style scoped>
.none{
  display: none;
}
.todos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.tt {
    width: 350px;
    margin: 15px 0
}

.todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}

i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
}

.legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}

.complete-box,
.incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
}

.complete-box {
    background: #35495e;
}

.incomplete-box {
    background: #41b883;
}

.is-complete {
    color: #fff;
    background: #35495e;
}

@media (max-width: 500px) {
    .todos {
        grid-template-columns: 1fr;
    }
}
</style>
