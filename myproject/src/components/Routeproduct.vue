<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Hidden brand</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/product/sandip">
              Product <span class="sr-only">(current)</span>
            </router-link>
          </li>

          <li class="nav-item active">
            <router-link class="nav-link" to="/product/sandip/child">
              ProductChild 
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/productdetail"
              >Product Detail</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/cart">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/pament">Payment</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Routeproduct",
};
</script>
