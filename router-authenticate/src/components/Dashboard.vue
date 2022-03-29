<template>
<div class="container">
    <div class="row">

        <div class="jumbotron">
            <h1 class="display-3">Welcome to Dashboard : {{user.username}}</h1>
            <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>
        </div>

        <div class="row marketing" v-if="user.username == 'admin'">
            <div class="col-3" v-for="(actuser,index) in users" :key="actuser.id">
                <div class="card my-2">
                    <img class="card-img-top" src="@/assets/user.png" alt="Card image" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">{{index+1}}:{{actuser.username}}</h4>
                        <p class="card-text">{{actuser.email}}</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="row marketing" v-else>
            <div class="col-lg-6">
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                <h4>Subheading</h4>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                <h4>Subheading</h4>
                <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>

            <div class="col-lg-6">
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                <h4>Subheading</h4>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                <h4>Subheading</h4>
                <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            user: '',
            users: []
        }
    },

    mounted() {
        if (localStorage.Activeuser) {
           let lsuser = localStorage.users;
           this.users = JSON.parse(lsuser)

            let activeuser = localStorage.Activeuser
            this.user = JSON.parse(activeuser)
        }
    }

}
</script>
<style>

</style>
