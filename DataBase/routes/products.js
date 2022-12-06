const express = require("express");

// Import articles controllers
const {
  getAllProducts,getProductById,addToCart
 
} = require("../controllers/Products");

 
 
const authentication = require("../middleware/authentication");

// Create articles router
const productsRouter = express.Router();

 

productsRouter.get("/", getAllProducts);
 
productsRouter.get("/:id", getProductById);
productsRouter.post("/:id",authentication, addToCart);
 

module.exports = productsRouter;
