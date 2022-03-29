<template>
<div class="container">
    <div class="row  justify-content-center">
        <div class="col-md-11">
            <div class="form">
                <i class="fa fa-search"></i>
                <input type="text" v-model="city" @keypress.enter="searchCity" class="form-control form-input" placeholder="City search">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "SearchCity",
    data() {
        return {
            city: ''
        }
    },

    methods: {
        searchCity() {
            this.$emit('getCity', this.city);
            this.city = ''
        }
    }
}
</script>

<style scoped>
/* search box */
.form {
  position: relative;
}

.form .fa-search {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #9ca3af;
}

.form span {
  position: absolute;
  right: 17px;
  top: 13px;
  padding: 2px;
  border-left: 1px solid #d1d5db;
}

.left-pan {
  padding-left: 7px;
}

.left-pan i {
  padding-left: 10px;
}

.form-input {
  height: 55px;
  text-indent: 33px;
  border-radius: 10px;
}

.form-input:focus {
  box-shadow: none;
  border: none;
}

</style>
