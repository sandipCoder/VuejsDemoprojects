<template>
  <div>
    <h1>List</h1>
    <div class="container">
      <div class="row">
        <div class="bd-highligh align-items-center justify-content-center">
          <div class="list-group" v-for="apt in appoinments" :key="apt.aptid">
            <span class="list-group-item m-2 text-left deletdata">
              <div class="d-flex w-100 justify-content-between">
                <button class="btn-danger" @click="$emit('removeList', apt)">
                  <i class="fa fa-trash"></i>
                </button>

                <div class="text-left">
                  <h5 class="mb-1">
                    <strong>Pet name :</strong>
                    <span
                      contenteditable="contenteditable"
                      @blur="
                        $emit(
                          'edit',
                          apt.aptid,
                          'petname',
                          $event.target.innerText
                        )
                      "
                    >
                      {{ apt.petname }}
                    </span>
                  </h5>
                  <h6 class="mb-1">
                    <strong>Owner :</strong>
                    <span
                      contenteditable="contenteditable"
                      @blur="
                        $emit(
                          'edit',
                          apt.aptid,
                          'petowner',
                          $event.target.innerText
                        )
                      "
                    >
                      {{ apt.petwoner }}
                    </span>
                  </h6>
                  <p class="mb-1">
                    <strong>Description :</strong>
                    <span
                      contenteditable="contenteditable"
                      @blur="
                        $emit(
                          'edit',
                          apt.aptid,
                          'petnote',
                          $event.target.innerText
                        )
                      "
                      >{{ apt.aptnotes }}
                    </span>
                  </p>
                </div>

                <small>{{ dataFormat(apt.petapt) }}</small>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "List",
  props: ["appoinments"],

  methods: {
    dataFormat: function (date) {
      return moment(new Date(date)).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>

<style scoped>
.text-left {
  text-align: left !important;
}

.deletdata {
  cursor: pointer;
}
</style>
