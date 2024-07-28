const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  images:{ 
    type:[String],
  }
},{
  timestamps:true
});
const ProductModel=mongoose.model("products",productschema)
module.exports=ProductModel