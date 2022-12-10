<template>
  <div class="product-main">
    <h1>Products</h1>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <img class="proImage" :src="product.image" />
        <h3>{{ product.title }}</h3>
        <div class="cost">Price:{{ product.price }}</div>
      
        <button class="add" v-on:click="addItemToCart(product.productID)">Add to cart</button>
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

<style>
*{
  margin: 0;
padding:0
}

.products{

  display: grid;
  grid-template-columns: auto auto auto;

}





.add{
  padding: 10px;
  background-color: rgb(50, 134, 123);
  color: white;
  outline: none;
  border: none;
  cursor: pointer;


}


</style>
