<template>
<div>
    <div v-if="getRecord.length > 0" class="topcalss">
        <ul>
            
            <li v-for="(item, index) in getRecord" :key="index">
                <Edititem :item="item" />
            </li>
        </ul>
        <hr />
        <div class="status">
            <span> All: {{ activeTodosCount }} </span>
            <span> Active </span>
            <span> Completed {{doneTodosCount}} </span>
        </div>
    </div>

    <div v-else style="margin-top:20px">No Record Found</div>

</div>
</template>

<script>
import Edititem from './EditItem.vue'

import {
    mapGetters
} from "vuex";
export default {
    name: "AddList",
    components: {
        Edititem,
    },
    computed: {
        ...mapGetters(["getRecord","activeTodosCount","doneTodosCount"]),
    },
};
</script>

<style>
.dnone {
    display: none;
}

.dblock {
    display: block;
}

.topcalss {
    width: 50%;
    margin: 0 auto
}

.topcalss ul {
    border-right: 1px solid #ccc;
    list-style: none;

    padding: 0;
}

.listItem {
    display: flex;
    justify-content: space-between
}

.input {
    width: 100%
}
</style>
