<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-7">
          <div class="input-group my-3">
            <input
              id="SearchApts"
              placeholder="Search"
              type="text"
              class="form-control"
              aria-label="Search Appointments"
              v-model="searchitem"
            />

            <div class="input-group-append dropdown">
              <button
                type="button"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="dropdownMenuButton2"
              >
                Sort by
                <span class="caret"></span>
              </button>

              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton2"
              >
                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="petName"
                  @click="$emit('keyRequest', 'petName')"
                >
                  Pet Name
                  <i class="fa fa-check" v-if="myKey === 'petName'"></i>
                </a>

                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="aptDate"
                  @click="$emit('keyRequest', 'apt')"
                >
                  Date
                  <i class="fa fa-check" v-if="myKey === 'petapt'"></i>
                </a>

                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="ownerName"
                  @click="$emit('keyRequest', 'petwoner')"
                >
                  Owner
                  <i class="fa fa-check" v-if="myKey === 'petwoner'"></i>
                </a>

                <div class="dropdown-divider" role="separator"></div>

                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="asc"
                  @click="$emit('keyRequestDir', 'asc')"
                >
                  Asc
                  <i class="fa fa-check" :class="[fa-check?'asc' : '']" v-if="myOrder === 'asc'"></i>
                 
                </a>

                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="desc"
                  @click="$emit('keyRequestDir', 'desc')"
                >
                  Desc 
                  <i class="fa fa-check" v-if ="myOrder === 'desc'"></i>
                
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchdata",

  data() {
    return {
      searchitem: "",
    };
  },
  watch: {
    searchitem: function() {
      // console.log("hi sandip..")
      this.$emit("searchFilter", this.searchitem);
    },
  },

  props: ["myKey", "myOrder"],
};
</script>
