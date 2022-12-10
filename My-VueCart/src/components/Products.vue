<template>
  <div class="product-main">
    <h1>Products</h1>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <img class="proImage" :src="product.image" />
        <h3>{{ product.title }}</h3>
        <div class="cost">{{ product.price }}</div>
      
        <button v-on:click="addItemToCart(product.productID)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
 
  data: () => {
    return {
      products:[],
      id:""
      
    };
  },

  methods: {
    async fetchProducts() {
     await axios.get(
        "http://localhost:5000/products"
      ).then((res)=>{this.products=(res.data.All_Products);})
      
     
    },
    addItemToCart(id) {
      this.$emit("addItemToCart", id);
    },
  },

  async mounted() {
            await this.fetchProducts()
        }
};
</script>

<style></style>
