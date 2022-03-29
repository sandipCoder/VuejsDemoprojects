import Vue from "vue";
import Router from "vue-router";
import Product from "../view/Product.vue";
import Productdetail from "../view/Productdetail.vue";
import Productdetailchild from "../view/Productdetailchild.vue";
import Cart from "../view/Cart.vue";
import Pament from "../view/Pament.vue";

Vue.use(Router);

const routes = [
  {
    path: "/product/:name",
    name: "product",
    component: Product,
    children: [
      {
        path: "child",
        component: Productdetailchild,
      },
    ],
  },
  {
    path: "/productdetail",
    name: "productdetail",
    component: Productdetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/pament",
    name: "pament",
    component: Pament,
  },
];

const router = new Router({
  routes: routes,
});

export default router;
