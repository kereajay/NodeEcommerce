const express=require('express')
const productRouter=express.Router()

const productController=require('../Controller/product')
const authmiddleware=require('../Middleware/userAuth')
const { isseller } = require('../Middleware/sellereauth')
productRouter.get('/getproductslist',authmiddleware,productController.getallproducts)
productRouter.post('/createproduct',authmiddleware,isseller,productController.createproduct)
productRouter.get('/getproduct/:productid',authmiddleware,productController.getproductbyid)
productRouter.put('/update/:productid',authmiddleware,isseller,productController.updateproductbyid)
productRouter.put('/wishlist',authmiddleware,productController.addWishlist)
module.exports=productRouter
