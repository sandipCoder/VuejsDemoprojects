<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card textcenter mt-3">
          <div
            class="card-header bg-primary text-white"
            @click="hidepanel = !hidepanel"
          >
            <i class="fa fa-plus"></i> Appointment
          </div>

          <div class="card-body" :class="{ 'd-none': hidepanel }">
            <form id="aptForm" @submit.prevent="submitForm">
              <div class="form-group form-row text-left">
                <label class="col-md-2 col-form-label " for="petName"
                  >Pet Name</label
                >
                <div class="col-md-10">
                  <input
                    type="text"
                    class="form-control"
                    name="petName"
                    id="petName"
                    placeholder="Pet's Name"
                    v-model="formData.petName"
                  />
                </div>
              </div>

              <div class="form-group form-row  text-left">
                <label
                  class="col-md-2 col-form-label text-md-right"
                  for="ownerName"
                  >Pet Owner</label
                >
                <div class="col-md-10">
                  <input
                    type="text"
                    class="form-control"
                    id="ownerName"
                    placeholder="Owner's Name"
                    v-model="formData.ownerName"
                  />
                </div>
              </div>

              <div class="form-group form-row  text-left">
                <label
                  class="col-md-2 col-form-label text-md-right"
                  for="aptDate"
                  >Date</label
                >
                <div class="col-md-4">
                  <input
                    type="date"
                    class="form-control"
                    id="aptDate"
                    v-model="formData.aptDate"
                  />
                </div>
                <label
                  class="col-md-2 col-form-label text-md-right"
                  for="aptTime"
                  >Time</label
                >
                <div class="col-md-4">
                  <input
                    type="time"
                    class="form-control"
                    name="aptTime"
                    id="aptTime"
                    v-model="formData.aptTime"
                  />
                </div>
              </div>

              <div class="form-group form-row  text-left">
                <label class="col-md-2 text-md-right" for="aptNotes"
                  >Apt. Notes</label
                >
                <div class="col-md-10">
                  <textarea
                    class="form-control"
                    rows="4"
                    cols="50"
                    name="aptNotes"
                    id="aptNotes"
                    placeholder="Appointment Notes"
                    v-model="formData.aptNotes"
                  ></textarea>
                </div>
              </div>

              <div class="form-group form-row mb-0">
                <div class="offset-md-2 col-md-10">
                  <button type="submit" class="btn btn-primary d-block ml-auto">
                    Add Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Addlist",
  data() {
    return {
      hidepanel: true,
      formData: [],
    };
  },
  methods: {
    submitForm() {
        
      this.formData = {
        petname: this.formData.petName,
        petwoner: this.formData.ownerName,
        petapt: this.formData.aptDate + " " + this.formData.aptTime,
        aptnotes: this.formData.aptNotes,
      };

      console.log( this.formData);

      this.$emit('add',this.formData);
      this.formData = []; 
      this.hidepanel=true;
    },
  },
};
</script>
<style scoped>
.textcenter,
.text-left {
  text-align: left;
}
</style>
