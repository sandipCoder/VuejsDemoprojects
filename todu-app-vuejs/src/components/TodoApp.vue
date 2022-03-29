<template>
  <div class="mt-2">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <ol class="list-group list-group-flush">
            <a
              href="#"
              class="list-group-item list-group-item-action active mb-3"
              aria-current="true"
            >
              All Appointments
            </a>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
              v-for="apts in appointments"
              :key="apts.id"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">
                  Pet Name :
                  <span
                    contenteditable="contenteditable"
                    @blur="
                      $emit(
                        'editApt',
                        apts.aptmtid,
                        'petName',
                        $event.target.innerText
                      )
                    "
                  >
                    {{ apts.petName }}
                  </span>
                </div>
                <span
                  ><b>Pet Owner</b> :
                  <span
                    contenteditable="contenteditable"
                    @blur="
                      $emit(
                        'editApt',
                        apts.aptmtid,
                        'petOwner',
                        $event.target.innerText
                      )
                    "
                    >{{ apts.petOwner }}</span
                  ></span
                >
                <p>
                  <b>Apt Note</b> :
                  <span
                    contenteditable="contenteditable"
                    @blur="
                      $emit(
                        'editApt',
                        apts.aptmtid,
                        'aptNote',
                        $event.target.innerText
                      )
                    "
                    >{{ apts.aptNote }}</span
                  >
                </p>
                <button
                  class="btn btn-danger btn-sm"
                  @click="$emit('removeList', apts)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
              <span class="badge bg-primary rounded-pill">{{
                dataFormat(apts.aptDateTime)
              }}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "TodoApp",
  props: ["appointments"],

  data() {
    return {};
  },

  methods: {
    dataFormat: function (date) {
      return moment(new Date(date)).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
