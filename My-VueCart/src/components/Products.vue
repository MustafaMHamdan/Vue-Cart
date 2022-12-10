<template>
  <div class="product-main">
    <div class="product-tittle"><h1>Products</h1></div>

    <div class="products">
      <div class="item" v-for="(product, index) in products" :key="index">
    
    
        <div>   <img class="proImage" :src="product.image" /></div>
        <div class="detailed"><h3>{{ product.title }}</h3>
        <div class="cost">Price:{{ product.price }}</div>

        <button class="add" v-on:click="addItemToCart(product.productID)">
          Add to cart
        </button>
      </div> 
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => {
    return {
      products: [],
      id: "",
    };
  },

  methods: {
    async fetchProducts() {
      await axios.get("http://localhost:5000/products").then((res) => {
        this.products = res.data.All_Products;
      });
    },
    addItemToCart(id) {
      this.$emit("addItemToCart", id);
    },
  },

  async mounted() {
    await this.fetchProducts();
  },
};
</script>

<style>




.product-main{

display: flex;
flex-direction:column;
}


.product-tittle{display: flex;
justify-content: center;
align-items: center;
justify-items: center;
margin: 2vh auto ;
}


.products {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto ;
}

.item{
  display: flex;
  flex-direction: column;
width: 30%;
justify-content: center;
align-content: center;
align-items: center;
justify-items: center;

border:  1px solid silver;
margin: 1vh 10px;

}


.proImage {
  width: 15vh;
  height: 20vh;
 
}



.detailed{
  display: flex;
  width: 50%;
  height: 50%;
  flex-direction: column;
  justify-content: center;
align-content: center;
align-items: center;
justify-items: center;
margin: 1vh auto;

}



.add {
  padding: 10px;
  background-color: rgb(50, 134, 123);
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
