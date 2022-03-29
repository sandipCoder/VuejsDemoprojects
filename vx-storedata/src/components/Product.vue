<template>
<div class="hello">
    <h1>{{ pmessage }}</h1>
    <h2>Product count in Products = {{ productsCount }}</h2>
    <h3>Cart Products in product = {{ cartProducts }}</h3>

    <h5>Product Data</h5>
    <div>
        <button @click="addproduct">Add Product</button>

        <button @click="addCartproduct">Add Cart</button>

        <h3>All Products</h3>
        <li v-for="product in allProducts" :key="product.id">
            {{ product.name }} | $ {{ product.price | addZero }}
        </li>

        <h3>Cart Products</h3>
        <li v-for="product in cartproducts" :key="product.id">
            {{ product.name }} | $ {{ product.price | addZero }}
        </li>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapState,
    mapActions
} from "vuex";
export default {
    name: "HelloWorld",
    filters: {
        addZero(val) {
            return val.toFixed(2);
        },
    },
    computed: {
        ...mapState({
            pmessage: (state) => state.products.pmessage,
        }, {
            cmessage: (state) => state.carts.cmessage,
        }),

        ...mapGetters("products", {
            allProducts: "showProducts",
        }),

        ...mapGetters("carts", {
            cartproducts: "showProducts",
        }),

        ...mapGetters("products", {
            productsCount: "getCountofProdust",
        }),
        ...mapGetters("carts", {
            cartProducts: "getCountofProdust",
        }),
    },

    methods: {
        ...mapActions("products", {
            addproduct: "addNewProduct",
        }),
        ...mapActions("carts", {
            addCartproduct: "addNewProduct",
        }),
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
