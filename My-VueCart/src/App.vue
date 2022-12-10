<template>
  <div class="container">
    <div class="nav">
    <header>
      <button v-on:click="navigateTo('products')">View products</button>

      <p>in cart</p>

      <button v-on:click="navigateTo('cart')">View Cart</button>
      <button v-on:click="navigateTo('register')">Sign Up</button>

      <button v-if="!token" v-on:click="navigateTo('login')">Sign In</button>
      <button v-if="token" v-on:click="logOut">Log Out</button>
    </header>
  </div>

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
      cart: JSON.parse(localStorage.getItem("cart")),
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
* {
  margin: 0;
  padding: 0;
}

.container{ 
 display:flex;
 flex-direction: column;
}


.nav{width:100%}



 



header {position: sticky;
  top: 0;
  width: 100%;

  box-shadow: 2px 2px 5px blue;
  background-color: black;
  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  height: 5rem;
  width: 100vw;
  font-size: 1.2rem;

 
}

header button {
  cursor: pointer;
  color: white;
  background-color: blue;
}

p {
  padding: 24px;
}
</style>
