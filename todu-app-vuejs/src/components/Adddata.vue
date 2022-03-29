<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card text-black">
            <h3 class="card-title py-4 bg-primary text-white text-center">
              Todo Appointment  <i class="fas fa-plus" @click="hidepanel=!hidepanel"></i>
            </h3>
            <div class="card-body"  :class="{ 'd-none': hidepanel }">
              <form action="" class="text-left" @submit.prevent="onsubmitApt">
                <div class="mb-3">
                  <label for="" class="form-label">Petanme</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="formData.petName"
                    name="petName"
                    id="petName"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Pet Owner Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="formData.petOwner"
                    name="PetOwner"
                    id="petOwner"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Apt Date</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="formData.aptDate"
                    name="aptDate"
                    id="aptDate"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Apt Time</label>
                  <input
                    type="time"
                    class="form-control"
                    v-model="formData.aptTime"
                    name="aptTime"
                    id="aptTime"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label"></label>
                  <textarea
                    class="form-control"
                    v-model="formData.aptNote"
                    name="aptNote"
                    id="aptNote"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-success">
                  Add Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Adddata",
  data() {
    return {
      formData: [],
      hidepanel: false,
    };
  },

  methods: {
    onsubmitApt() {
      this.formData = {
        petName: this.formData.petName,
        petOwner: this.formData.petOwner,
        aptDateTime: this.formData.aptDate + " " + this.formData.aptTime,
        aptNote: this.formData.aptNote,
      };
     
      
      this.$emit("addApt", this.formData);
      this.formData = [];
    },
  },
};
</script>
