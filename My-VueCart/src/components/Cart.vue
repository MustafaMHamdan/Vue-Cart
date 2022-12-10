<template>
  <div class="cartContainer" >
    <h1>Your Cart</h1>
    <div class="products">
      <div v-for="(product, index) in Cart" :key="index">
        <img class="proImage" :src="product.image" />
        <h3>{{ product.title }}</h3>
        <div>Price:{{ product.price }}</div>

        <button v-on:click="removeItemFromCart(product.id)">
          Remove from cart
        </button>
      </div>
      <br> 
   
    </div>
    <br> <br> 
    <h1 >Total  :{{Total}}</h1><br> <br> 
    <h1>Quantity:{{Quantity}}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["cart"],

  data: () => {
    return {
      token:localStorage.getItem("token"),
      Cart: [],
      total:"",
      Quantity :""
    };
  },

  methods: {
    async fetchCart() {
      await axios.get("http://localhost:5000/cart",{
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then((res) => {

        console.log(res.data);
        this.Cart=res.data.cartProducts;
        this.Quantity=res.data.qty;
        this.Total=res.data.total;
        
        localStorage.setItem("cart",JSON.stringify(this.Cart ));

      });
    },

    removeItemFromCart(id) {
      this.$emit("removeItemFromCart", id);
      this.Cart = this.Cart.filter((product) => product.id !== id)
      localStorage.setItem("cart",JSON.stringify(this.Cart ));
      
    },
  },
  async mounted() {
    await this.fetchCart();
  },
};
</script>

<style>
*{
  margin: 0;
padding:0
}

.cartContainer{
display: flex;
flex-direction: column;

}


</style>
