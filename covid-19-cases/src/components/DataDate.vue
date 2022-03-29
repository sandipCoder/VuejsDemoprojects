<template>
<div  class="mt-3">
    <div>
        <div class="header font-weight-bold">{{title}}</div>
        <div class="dates">
            <div class="start">
                <strong>Date</strong>
                {{timeshow}}             
            </div>            
        </div>        
    </div>
</div>
</template>

<script>
import moment from 'moment';
export default {
    name: "DataDate",
    props: ['dataDate', 'title'],

    computed: {
        timeshow: function () {
            return moment(this.dataDate).format('MMMM Do YYYY, dddd, h:mm:ss a');
        }
    }
}
</script>

<style>

</style>
