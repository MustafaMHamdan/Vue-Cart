<template>
  <div>
    <header>
      <button v-on:click="navigateTo('products')">View products</button>
       {{cart.length}} in cart
      <button v-on:click="navigateTo('cart')">View Cart</button>
      <button v-on:click="navigateTo('register')">Sign Up</button>

      <button v-if="!token" v-on:click="navigateTo('login')">Sign In</button>
      <button v-if="token" v-on:click="logOut">Log Out</button>
    </header>

    <div v-if="page === 'cart'">
      <Cart v-on:removeItemFromCart="removeItemFromCart" :cart="cart" />
    </div>
    <div v-if="page === 'register'">
      <Register />
    </div>
    <div v-if="page === 'login'">
      <Login />
    </div>

    <div v-if="page === 'products'">
      <Products v-on:addItemToCart="addItemToCart" />
    </div>
  </div>
</template>

<script>
import Products from "./components/Products.vue";
import Cart from "./components/Cart.vue";
import Register from "./components/Register.vue";
import Login from "./components/login.vue";
import axios from "axios";
export default {
  name: "App",
  components: { Products, Cart, Register, Login },
  data: () => {
    return {
      page: "products",
      cart:JSON.parse(localStorage.getItem("cart")),
      token: localStorage.getItem("token"),
      id: "",
    };
  },
  methods: {
    addItemToCart(id) {
      axios
        .post(
          `http://localhost:5000/products/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((result) => {
          console.log(this.cart);
        })
        .catch((err) => {
          console.log(err);
          console.log(this.token);
        });
    },
    removeItemFromCart(id) {
      axios
        .put(
          `http://localhost:5000/cart/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((result) => {
          console.log(id);
          
         
        })
        .catch((err) => {
          console.log(err);
         
        });
    },
    navigateTo(page) {
      this.page = page;
    },

    logOut() {
      this.token = "";
      localStorage.clear();
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

.product-main {
  display: grid;
}

.products {
  display: flex;
  flex-direction: row;
}

.products button {
  padding: 10px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
}

.proImage {
  width: 10vw;
  height: 20vh;
}
</style>

<style scoped>
header {
  height: 60px;
  width: 100%;
  box-shadow: 2px 2px 5px blue;
  background-color: black;
  text-align: right;
  font-size: 30px;
  padding-top: 20px;
}

header button {
  padding: 10px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: green;
}
</style>
