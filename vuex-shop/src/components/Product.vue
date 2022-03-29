<template>
  <div>
    <h1 class="text-center">All Products</h1>

    <div class="container">
      <hr />
      <div class="row">
        <div
          class="col-sm-3 col-lg-3 col-md-3"
          v-for="(product, index) in allProducts"
          :key="index"
        >
          <div class="card text-center my-3">
            <img
              class="card-img-top img-responsive"
              src="../assets/logo.png"
              alt=""
            />
            <div class="card-body">
          
              <h4 class="card-title">
                {{ product.id }} : {{ product.title | setchar }}
              </h4>
              <p class="card-text">{{ product.body | setcharbody }}</p>
              <button class="btn btn-primary" @click="delPorduct(product.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Product",
  filters: {
    setchar: function (val) {
      return val.substring(0, 20);
    },
    setcharbody: function (val) {
      return val.substring(0, 100);
    },
  },

  methods: {
    ...mapActions(["getProducts", "removeProducts"]),
    delPorduct(getid) {
      this.removeProducts(getid);
      window.location.reload();
    },
  },

  computed: mapGetters(["allProducts"]),

  created() {
    this.getProducts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.card {
  height: auto;
}

.img-responsive {
  width: 50px;
}
</style>
