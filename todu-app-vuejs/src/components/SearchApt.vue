<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 mt-4">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              v-model="searchData"
              aria-label="Text input with dropdown button"
              placeholder="Search Item"
            />
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="petName"
                  @click="$emit('keyRequest', 'petName')"
                >
                  Pet Name
                  <i class="fas fa-check" v-if="myKey === 'petName'"></i>
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="aptDate"
                  @click="$emit('keyRequest', 'aptDate')"
                >
                  Date
                  <i class="fas fa-check" v-if="myKey === 'aptDate'"></i>
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="PetOwner"
                  @click="$emit('keyRequest', 'PetOwner')"
                >
                  Owner
                  <i class="fas fa-check" v-if="myKey === 'PetOwner'"></i>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="asc"
                  @click="$emit('keyDir', 'asc')"
                >
                  Asc
                  <i
                    class="fas fa-check"
                    :class="[fa - check ? 'asc' : '']"
                    v-if="myOrder === 'asc'"
                  ></i>
                </a>
              </li>

              <li>
                <a
                  class="dropdown-item d-flex justify-content-between"
                  id="desc"
                  @click="$emit('keyDir', 'desc')"
                >
                  Desc
                  <i class="fas fa-check" v-if="myOrder === 'desc'"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchApt",

  data() {
    return {
      searchData: "",
    };
  },
  watch: {
    searchData: function () {
      // console.log("hi sandip..")
      this.$emit("searchFilter", this.searchData);
    },
  },

  props: ["myKey", "myOrder"],
};
</script>
